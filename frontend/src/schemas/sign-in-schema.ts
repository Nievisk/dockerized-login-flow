import z from "zod";

export const signInSchema = z.object({
    email: z
        .string()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),

    password: z
        .string()
        .min(8)
        .max(16)
        .regex(
            /^(?=.*\p{L})(?=.*\p{Nd})(?=.*[!@#$%^&*()\-_=+\[\]{};:'",.<>/?]).{8,16}$/u)
})
