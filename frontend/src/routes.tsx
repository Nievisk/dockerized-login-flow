import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUpPage } from "./pages/sign-up"
import { Congrats } from "./pages/congrats"
import { EmailSentPage } from "./pages/email-sending"
import { SignInPage } from "./pages/sign-in"
import { ValidatePage } from "./pages/validate"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Congrats} />
                <Route path="email-sending" Component={EmailSentPage} />
                <Route path="validate" Component={ValidatePage} />


                <Route path="auth">
                    <Route path="sign-up" Component={SignUpPage} />
                    <Route path="sign-in" Component={SignInPage} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}