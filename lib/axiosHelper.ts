/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  statusText: boolean;
}

export interface ErrorResponse {
  message: string;
  status: number;
  success: false;
}

const apiClient = axios.create({
  baseURL: "https://somtoandcode.pythonanywhere.com",
  withCredentials: false,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Enhanced token service
export const tokenService = {
  getAccessToken: (): string | undefined => Cookies.get("token"),
  refreshToken: (): string | undefined => Cookies.get("refresh"),

  saveToken: (accessToken: string, refreshToken: string): void => {
    // Set more precise expiration: access token 2 hours, refresh token 7 days
    Cookies.set("token", accessToken, { expires: 1/12 }); // 2 hours
    Cookies.set("refresh", refreshToken, { expires: 7 });
  },
  clearTokens: (): void => {
    Cookies.remove("token");
    Cookies.remove("refresh");
  },
};

// Improved error handling
export const handleError = (error: any): ErrorResponse => {
  if (axios.isCancel(error)) {
    console.log("Request canceled:", error.message);
    return {
      message: `Request canceled: ${error.message}`,
      status: 499,
      success: false,
    };
  }

  if (error.response) {
    // Server responded with an error
    console.error("Server error:", error.response.data || error.message);
    return {
      message: error.response.data?.message || "Server error",
      status: error.response.status,
      success: false,
    };
  }

  if (error.request) {
    console.error("No response received:", error.message);
    return {
      message: "No response from server",
      status: 500,
      success: false,
    };
  }

  console.error("Network error:", error.message);
  return {
    message: error.message || "Network error",
    status: 500,
    success: false,
  };
};

// Token refresh logic
let isRefreshing = false;
let failedQueue: Array<{resolve: (token: string) => void, reject: (error: any) => void}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });

  failedQueue = [];
};

// Enhanced interceptors
apiClient.interceptors.request.use(
    (config) => {
      const token = tokenService.getAccessToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If unauthorized and not already retrying
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then(token => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            return apiClient(originalRequest);
          }).catch(err => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = tokenService.refreshToken();
          if (!refreshToken) {
            throw new Error('No refresh token available');
          }

          const { data } = await apiClient.post('/token/refresh/', {
            refresh: refreshToken,
          });

          // Save new tokens
          tokenService.saveToken(data.access, data.refresh);

          // Update headers and retry original request
          originalRequest.headers['Authorization'] = `Bearer ${data.access}`;

          // Resolve any queued requests
          processQueue(null, data.access);

          return apiClient(originalRequest);
        } catch (refreshError) {
          // Clear tokens and redirect to login on refresh failure
          processQueue(refreshError, null);
          tokenService.clearTokens();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
);

// Existing data fetching methods remain the same
export const getData = async <T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response = await apiClient.get<T>(endpoint, options);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const postData = async <T>(
    endpoint: string,
    data:T,
    options: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response = await apiClient.post<T>(
        endpoint,
        data,
        options
    );
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const patchData = async <T = any, D = any>(
    endpoint: string,
    data: D,
    options: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.patch<ApiResponse<T>>(
        endpoint,
        data,
        options
    );
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export const deleteData = async <T = any>(
    endpoint: string,
    options: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.delete<ApiResponse<T>>(endpoint, options);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

export default apiClient;