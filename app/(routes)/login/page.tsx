"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginBrand from "@/components/LoginBrand";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import GoogleSignUp from "@/components/GoogleSignUp";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type FormData = z.infer<typeof formSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Validate fields when they lose focus
  });

  const onSubmit = async (data: FormData) => {
    console.log("Login data:", data);
  };

  return (
    <div className="py-32 px-4 bg-faded-grey">
      <main className="flex max-w-[1200px] mx-auto rounded-2xl bg-white dark:bg-slate-900/50 p-4">
        <LoginBrand />
        <section className="flex-1 p-4 md:p-[60px] flex flex-col gap-10">
          <div>
            <h2 className="text-2xl heading text-black dark:text-white">
              LOGIN
            </h2>
            <p className="text-xs mt-4">
              Please fill in your details to access your account
            </p>
          </div>

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
              />
              {errors.email && (
                <p className="login-form_error">{errors.email.message}</p>
              )}
            </div>

            <div className="w-full space-y-2">
              <Label>Password</Label>
              <Input
                placeholder="Enter password"
                {...register("password")}
                type="password"
              />
              {errors.password && (
                <p className="login-form_error">{errors.password.message}</p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full text-white bg-brand-blue hover:bg-brand-blue/80 cursor-pointer"
            >
              {isSubmitting ? "Loading.." : "Login"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <p className="text-sm mb-5">OR</p>
            <GoogleSignUp />
            <p className="mt-5">
              Don&apos;t have an account?{" "}
              <Link href={"/signup"} className="text-brand-blue">
                Sign Up
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
