"use client";

import { useState } from "react";
import { InputHTMLAttributes } from "react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  iconShow?: React.ReactElement;
  iconHide?: React.ReactElement;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  icon,
  iconShow,
  iconHide,
  type = "password",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-sm">
      <div className="flex gap-1 border-[0.5px] border-gray-100/10 p-2 rounded-md items-center">
        {icon && <span>{icon}</span>}
        <input
          className="text-xs flex-1 bg-transparent outline-none"
          type={showPassword ? "text" : type}
          {...props}
          required
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
