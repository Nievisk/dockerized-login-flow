import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUpPage } from "./pages/sign-up"
import { EmailSentPage } from "./pages/email-sending"
import { SignInPage } from "./pages/sign-in"
import { ValidatePage } from "./pages/validate"
import { AuthComponent } from "./auth-component"

export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={AuthComponent} />
                <Route path="email-sending" Component={EmailSentPage} />

                <Route path="auth">
                    <Route path="sign-up" Component={SignUpPage} />
                    <Route path="sign-in" Component={SignInPage} />
                    <Route path="validate" Component={ValidatePage} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}