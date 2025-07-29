import React from 'react'
import TemplateLoginSignup from '../TemplateLoginSignup'
import signupImg from '../../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
    return (
        <TemplateLoginSignup
            title="Join the millions learning to code with CaseChronicles for free"
            desc1="Build skills for today, tommorow and beyond. "
            desc2="Education to future-proof your career. "
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup
