import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frameImage from '../assets/frame.png'
import { FcGoogle } from 'react-icons/fc'

const TemplateLoginSignup = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-11/12 max-w-[1160px] py-12 mx-auto gap-8 md:gap-x-12 justify-between items-center">
            
            {/* Left Part - Form */}
            <div className="w-full max-w-[450px]">
                <h2 className="text-[var(--gray-900)] font-semibold text-3xl leading-[2.375rem]">
                    {title}
                </h2>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-[var(--gray-600)]">{desc1}</span>
                    <br />
                    <span className="text-[var(--main-color-blue)] italic">{desc2}</span>
                </p>

                {formtype === 'signup' ? (
                    <SignupForm setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <LoginForm setIsLoggedIn={setIsLoggedIn} />
                )}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-[var(--gray-600)]"></div>
                    <p className="text-[var(--gray-600)] font-medium leading-[1.275rem]">OR</p>
                    <div className="w-full h-[1px] bg-[var(--gray-600)]"></div>
                </div>

                <button className="w-full flex justify-center items-center gap-2 rounded-md font-medium text-[var(--black-color)] border border-[var(--black-color)] px-4 py-2 mt-6">
                    <FcGoogle />
                    <p>Sign up with Google</p>
                </button>
            </div>

            {/* Right Part - Image */}
            <div className="relative w-full max-w-[450px] hidden md:flex justify-center items-center">
                {/* Yeh pura div bhi mobile pe hide rahega */}

                <img
                    src={image}
                    loading="lazy"
                    alt="Pattern"
                    className="absolute -top-4 right-4"
                    width={558}
                    height={504}
                />
                <img
                    src={frameImage}
                    loading="lazy"
                    alt="Students"
                    className="w-full"
                    width={558}
                    height={504}
                />
            </div>
        </div>
    )
}

export default TemplateLoginSignup
