"use client";

import React from "react";
import { useSignUp } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import PasswordInput from "../ui/PasswordInput";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { SignUpTypeWithConfirm, SignUpSchema } from "@/lib/schema";

const SignupForm = () => {
  const router = useRouter();

  const { mutate, isPending } = useSignUp();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpTypeWithConfirm>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignUpTypeWithConfirm) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userData } = data;
    mutate(userData, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };
  return (
    <form
      className="flex flex-col items-start gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="flex gap-2 w-full flex-col md:flex-row">
        <div className="w-full space-y-2">
          <Label>First Name</Label>
          <Input
            placeholder="Enter first name"
            {...register("first_name")}
            type="text"
            error={!!errors.first_name}
          />
          {errors.first_name && (
            <p className="login-form_error">{errors.first_name.message}</p>
          )}
        </div>

        <div className="w-full space-y-2">
          <Label>Last Name</Label>
          <Input
            placeholder="Enter last name"
            {...register("last_name")}
            type="text"
            error={!!errors.last_name}
          />
          {errors.last_name && (
            <p className="login-form_error">{errors.last_name.message}</p>
          )}
        </div>
      </section>
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
          error={!!errors.confirmPassword}
          icon={<Lock className="w-4 h-4 text-gray-500" />}
          iconShow={<Eye className="w-4 h-4 text-gray-500" />}
          iconHide={<EyeOff className="w-4 h-4 text-gray-500" />}
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors.password && (
          <p className="login-form_error">{errors.password.message}</p>
        )}
      </div>

      <div className="w-full space-y-2">
        <Label>Confirm Password</Label>
        <PasswordInput
          error={!!errors.confirmPassword}
          icon={<Lock className="w-4 h-4 text-gray-500" />}
          iconShow={<Eye className="w-4 h-4 text-gray-500" />}
          iconHide={<EyeOff className="w-4 h-4 text-gray-500" />}
          placeholder="confirm your password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="login-form_error">{errors.confirmPassword.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full text-white bg-brand-blue hover:bg-brand-blue/80 cursor-pointer"
      >
        {isPending ? "Loading.." : "SignUp"}
      </Button>
    </form>
  );
};

export default SignupForm;
