import React from 'react'
import TemplateLoginSignup from '../TemplateLoginSignup'
import loginImg from "../../assets/login.png"

const Login = ({setIsLoggedIn}) => {
    return (
        <TemplateLoginSignup
            title="Welcome Back"
            desc1="Build skills for today, tommorow and beyond. "
            desc2="Education to future-proof your career. "
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login
