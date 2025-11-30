import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";

export const UseAuth = <T extends FieldValues>(url: string, schema: any) => {
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<T>({
        mode: "onSubmit",
        resolver: zodResolver(schema)
    })

    const handleSubmitform = handleSubmit(async (data) => {
        setLoading(true)
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })

        if (res.ok) {
            const data = await res.json()
            sessionStorage.setItem("accessToken", data.accessToken)
        }
        setLoading(false)
    })

    return { errors, handleSubmitform, register, loading }
}