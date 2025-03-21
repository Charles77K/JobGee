/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

export interface ErrorResponse {
  message: string;
  status: number;
  success: false;
}

const apiClient = axios.create({
  baseURL: "https://somtoandcode.pythonanywhere.com",
  withCredentials: true,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
});
// Improved error handling with typed error response
export const handleError = (error: any): ErrorResponse => {
  if (axios.isCancel(error)) {
    console.log("Request canceled:", error.message);
    return {
      message: `Request canceled: ${error.message}`,
      status: 499, // Client Closed Request
      success: false,
    };
  } else if (error.response) {
    // Server responded with a status other than 200 range
    console.error("Server error:", error.response.data || error.message);
    return {
      message: error.response.data?.message || "Server error occurred",
      status: error.response.status,
      success: false,
    };
  } else if (error.request) {
    // Request was made but no response received
    console.error("No response received:", error.message);
    return {
      message: "No response received from server",
      status: 0,
      success: false,
    };
  } else {
    // Something happened in setting up the request
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

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//get data
export const getData = async <T = any>(
  endpoint: string,
  options: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await apiClient.get<ApiResponse<T>>(endpoint, options);
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
