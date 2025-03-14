"use client";

import React from "react";
import LoginBrand from "@/components/LoginBrand";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { SignUpFormType, SignUpSchema } from "@/lib/schema";
import GoogleSignUp from "@/components/GoogleSignUp";
import Link from "next/link";

function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormType) => {
    console.log("Signup data:", data);
  };

  return (
    <div className="py-32 px-4 bg-faded-grey">
      <main className="flex max-w-[1200px] mx-auto rounded-2xl bg-white dark:bg-slate-900/50 p-4">
        <LoginBrand />
        <section className="flex-1 p-4 md:p-[60px] flex flex-col gap-8">
          <div>
            <h2 className="text-2xl heading text-black dark:text-white">
              Welcome to JobGee
            </h2>
            <p className="text-xs mt-2">
              Please fill in the form to create an account
            </p>
          </div>
          <form
            className="flex flex-col items-start gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className="flex gap-2 w-full flex-col md:flex-row">
              <div className="w-full space-y-2">
                <Label>First Name</Label>
                <Input
                  placeholder="Enter first name"
                  {...register("firstname")}
                  type="text"
                />
                {errors.firstname && (
                  <p className="login-form_error">{errors.firstname.message}</p>
                )}
              </div>

              <div className="w-full space-y-2">
                <Label>Last Name</Label>
                <Input
                  placeholder="Enter last name"
                  {...register("lastname")}
                  type="text"
                />
                {errors.lastname && (
                  <p className="login-form_error">{errors.lastname.message}</p>
                )}
              </div>
            </section>
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
              Already have an account?{" "}
              <Link href={"/login"} className="text-brand-blue">
                Login
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Signup;
