import { z } from "zod";

export const SignUpSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  lastname: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .refine((value) => value === "password".valueOf(), {
      message: "Passwords do not match",
    }),
});
export type SignUpFormType = z.infer<typeof SignUpSchema>;
