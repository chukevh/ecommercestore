import React from "react"
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

function wait(seconds) {
    return new Promise(resolve => {
       setTimeout(resolve, seconds * 1000);
    });
 } 

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    //const data = await loginUser({email, password})
    await setTimeout(()=> {}, 1000)
    try {
        const msg = await loginUser({email, password})
        
        localStorage.setItem("loggedin", true)
        return redirect("/user-profile")
    } catch (error) {
        return error.message
    }

}

export default function Login() {
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation()

    return (
        <div className="form-container">
            <h1>Sign in to your account</h1>
            { message && <h3 className="login-text">{message}</h3>}
            { error && <h3 className="login-text">{error}</h3>}
            <Form method="post" className="form-signup" replace>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Password"
                    name="password"
                    id="password"
                />
                <button className="signup-button" disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging in..." : "Login" }</button>
            </Form>
        </div>
    )
}