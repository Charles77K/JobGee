"use client";

import React from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordInput from "@/components/ui/PasswordInput";
import Spinner from "@/components/ui/Spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/lib/hooks";
import { setUser } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { tokenService } from "@/lib/axiosHelper";
import { useDispatch } from "react-redux";
import { FormData, formSchema } from "@/lib/schema";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    mutate(data, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: (data: any) => {
        router.push("/dashboard");
        dispatch(setUser(data));
        tokenService.saveToken(data.access, data.refresh);
        reset();
      },
    });
  };

  return (
    <form
      className="flex flex-col items-start gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full space-y-2">
        <Label>Email</Label>
        <Input
          placeholder="Enter email address"
          {...register("email")}
          type="email"
          error={!!errors.email}
        />
        {errors.email && (
          <p className="login-form_error">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full space-y-2">
        <Label>Password</Label>
        <PasswordInput
          icon={<Lock className="w-4 h-4 text-gray-500" />}
          iconShow={<Eye className="w-4 h-4 text-gray-500" />}
          iconHide={<EyeOff className="w-4 h-4 text-gray-500" />}
          placeholder="Enter your password"
          {...register("password")}
          error={!!errors.password}
        />
        {errors.password && (
          <p className="login-form_error">{errors.password.message}</p>
        )}
      </div>

      <Button
        disabled={isPending}
        className="w-full text-white bg-brand-blue hover:bg-brand-blue/80 cursor-pointer"
      >
        {isPending ? <Spinner size="md" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
