import React from "react";
import LoginBrand from "@/components/LoginBrand";
import Link from "next/link";
import GoogleSignUp from "@/components/GoogleSignUp";
import SignupForm from "@/components/auth/SignupForm";

function Signup() {
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

          {/* sign up form */}
          <SignupForm />

          {/* google sign up */}
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
