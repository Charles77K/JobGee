import { z } from "zod";

export const SignUpSchema = z
  .object({
    first_name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" }),
    last_name: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(5, { message: "Password must be at least 5 characters" }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword != password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpTypeWithConfirm = z.infer<typeof SignUpSchema>;
export type SignUpTypeWithoutConfirm = Omit<
  z.infer<typeof SignUpSchema>,
  "confirmPassword"
>;
