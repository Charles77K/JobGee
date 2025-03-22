"use client";

import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getData, postData } from "./axiosHelper";
import { ShowToast } from "./toast";
import { FormData, SignUpTypeWithoutConfirm } from "./schema";
import { IUserProfile } from "./types";

const queryClient = new QueryClient();

export const useSignUp = () => {
  return useMutation({
    mutationKey: ["sign-up"],
    mutationFn: (data: SignUpTypeWithoutConfirm) =>
      postData<SignUpTypeWithoutConfirm>("/register/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sign-up"],
      });
      ShowToast.success("Sign up Success");
    },
    onError: (err) => {
      ShowToast.error(`error: ${err.message}`);
      console.log(err);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: FormData) => postData<FormData>("/login/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
      ShowToast.success("Login Success");
    },
    onError: (err) => {
      ShowToast.error(`error: ${err.message}`);
      console.log(err);
    },
  });
};

export const useFetchProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => getData<IUserProfile>("/profile/"),
    staleTime: 1000 * 60 * 10, // 5 minutes
  });
};
