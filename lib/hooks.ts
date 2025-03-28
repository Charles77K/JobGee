"use client";

import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { getData, patchData, postData } from "./axiosHelper";
import { ShowToast } from "./toast";
import { FormData, SignUpTypeWithoutConfirm } from "./schema";
import {IJobSearch, IUserProfile} from "./types";



export const useSignUp = () => {
  const queryClient = useQueryClient();
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: FormData) => postData<FormData>("/login/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
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
    queryFn: () => getData<IUserProfile>("/profile"),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-profile"],
    mutationFn: (data: unknown) => patchData("/profile/update/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
      ShowToast.success("Profile Updated");
    },
    onError: (err) => {
      ShowToast.error(`error: ${err.message}`);
      console.log(err);
    },
  });
};

export const useJobSearch = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["job-search"],
    mutationFn: (data:IJobSearch)=>postData("/job-search/", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["job-search"],
      })
    },
    onError: (err) => {
      ShowToast.error(`error: ${err.message}`);
    }
  })
}
