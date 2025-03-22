"use client";

import { cn } from "@/lib/utils";
import { useState, InputHTMLAttributes } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  iconShow?: React.ReactElement;
  iconHide?: React.ReactElement;
  className?: string;
  error?: boolean; // Add an error prop
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  icon,
  iconShow,
  iconHide,
  type = "password",
  className,
  error = false, // Default no error
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-sm">
      <div
        className={cn(
          "flex gap-1 border p-2 rounded-md items-center transition-colors",
          "focus-within:ring-[1px] focus-within:ring-ring focus-within:border-ring",
          error &&
            "border-red-500 focus-within:ring-red-500 focus-within:border-red-500"
        )}
      >
        {icon && <span>{icon}</span>}
        <input
          className={cn(
            "flex w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground",
            "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "selection:bg-primary selection:text-primary-foreground",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          type={showPassword ? "text" : type}
          aria-invalid={error}
          {...props}
        />
        {iconShow && iconHide && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer"
          >
            {showPassword ? iconHide : iconShow}
          </span>
        )}
      </div>
    </div>
  );
};

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
