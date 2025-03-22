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
// error handling with typed error response
export const handleError = (error: any): ErrorResponse => {
  if (axios.isCancel(error)) {
    console.log("Request canceled:", error.message);
    return {
      message: `Request canceled: ${error.message}`,
      status: 499,
      success: false,
    };
  } else if (error.response) {
    console.error("Server error:", error.response.data || error.message);
    return {
      message: error.response.data?.message || "Server error occurred",
      status: error.response.status,
      success: false,
    };
  } else if (error.request) {
    console.error("No response received:", error.message);
    return {
      message: "No response received from server",
      status: 0,
      success: false,
    };
  } else {
    console.error("Network error:", error.message);
    return {
      message: "Network error occurred",
      status: 0,
      success: false,
    };
  }
};

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    handleError(error);
    return Promise.reject(error);
  }
);

export const tokenService = {
  getAccessToken: (): string | undefined => Cookies.get("token"),
  refreshToken: (): string | undefined => Cookies.get("refresh"),

  saveToken: (accessToken: string, refreshToken: string): void => {
    Cookies.set("token", accessToken);
    Cookies.set("refresh", refreshToken);
  },
  clearTokens: (): void => {
    Cookies.remove("token");
    Cookies.remove("refresh");
  },
};

apiClient.interceptors.request.use(
  (config) => {
    const token = tokenService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//get data
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

//post data
export const postData = async <T = any, D = any>(
  endpoint: string,
  data: D,
  options: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.post<ApiResponse<T>>(
      endpoint,
      data,
      options
    );
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

//patch data
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

//delete data
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
