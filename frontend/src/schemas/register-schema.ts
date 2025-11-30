import z from "zod";

export const registerSchema = z.object({
    first_name: z.string().min(3).max(50).regex(/^[\p{L}\s'-]{3,50}$/u),
    last_name: z.string().min(3).max(50).regex(/^[\p{L}\s'-]{3,50}$/u),
    email: z.string(),
    password: z.string().min(8).max(16).regex(/^(?=.*\p{L})(?=.*\p{Nd})(?=.*[!@#$%^&*()\-_=+\[\]{};:'",.<>/?]).{8,16}$/u),
    confirmPassword: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}).refine(data => data.password === data.confirmPassword, {
    path: ['password'],
    error: "Passwords do not match"
})