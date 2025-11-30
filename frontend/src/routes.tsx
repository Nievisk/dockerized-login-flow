import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "./pages/register"
import { Login } from "./pages/login"
import { Congrats } from "./pages/congrats"
import { Validate } from "./pages/validate"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Congrats} />
                <Route path="auth">
                    <Route path="sign-up" Component={Register} />
                    <Route path="sign-in" Component={Login} />
                    <Route path="validate" Component={Validate} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}