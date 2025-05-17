import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function submitHandler(e) {
        e.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged In Successfully!")
        navigate("/dashboard")
    }

    return (
        <div className='min-h-auto flex items-center justify-center bg-[var(--white-color)]'>
            <form
                onSubmit={submitHandler}
                className='flex flex-col gap-5 w-full max-w-md bg-[var(--white-color)] p-8 rounded-lg shadow-lg border border-[var(--gray-200)]'
            >

                <label className='flex flex-col gap-2'>
                    <span className='text-sm text-[var(--gray-color-navlink)]'>Email Address <span className='text-[var(--red-500)]'>*</span></span>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter your email'
                        className='w-full px-3 py-2 border border-[var(--gray-200)] rounded-md focus:outline-none focus:border-[var(--main-color-blue)]'
                    />
                </label>

                <label className='flex flex-col gap-2 relative'>
                    <span className='text-sm text-[var(--gray-color-navlink)]'>Password <span className='text-[var(--red-500)]'>*</span></span>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter your password'
                        className='w-full px-3 py-2 border border-[var(--gray-200)] rounded-md focus:outline-none focus:border-[var(--main-color-blue)]'
                    />
                    <span
                        className='absolute right-3 top-9 text-[var(--gray-color-navlink)] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                </label>

                <button
                    type='submit'
                    className='bg-[var(--main-color-blue)] text-[var(--white-color)] py-2 rounded-md hover:bg-[var(--blue-900)] cursor-pointer transition-all duration-200'
                >
                    Sign In
                </button>

                <div className='text-center text-sm text-[var(--gray-600)]'>
                    Don't have an account?
                    <Link to='/signup' className='text-[var(--main-color-blue)] font-medium ml-1'>Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
