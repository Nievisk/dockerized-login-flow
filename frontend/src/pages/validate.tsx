import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ValidatePage = () => {
    const [statusCode, setStatusCode] = useState<number>()
    const navigate = useNavigate()

    const handleUserValidation = async () => {
        const url = import.meta.env.URL || 'http://localhost:3000/auth/validate'

        const res = await fetch(url, {
            method: "PUT",
            headers: { "authoriazation": `bearer ` }
        })

        if (res.ok) navigate("/")

        setStatusCode(res.status)
    }

    useEffect(() => {
        (async () => await handleUserValidation())()
    }, [])

    return (
        <div>{statusCode !== 200 && "Bad request"}</div>
    )
}