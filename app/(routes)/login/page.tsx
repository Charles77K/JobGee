import React from "react";
import LoginBrand from "@/components/LoginBrand";
import GoogleSignUp from "@/components/GoogleSignUp";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

function Login() {
  return (
    <div className="py-32 px-4 bg-faded-grey">
      <main className="flex max-w-[1200px] mx-auto rounded-2xl bg-white dark:bg-slate-900/50 p-4">
        {/* left section */}
        <LoginBrand />

        {/* right section  */}
        <section className="flex-1 p-4 md:p-[60px] flex flex-col gap-10">
          <div>
            <h2 className="text-2xl heading text-black dark:text-white">
              LOGIN
            </h2>
            <p className="text-xs mt-4">
              Please fill in your details to access your account
            </p>
          </div>

          <LoginForm />

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
