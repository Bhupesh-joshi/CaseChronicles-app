import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created Successfully");

    navigate("/dashboard")
  }

  return (
    <div className='w-full max-w-[450px] mx-auto bg-[var(--white-color)] mt-3'>

      <h1 className='text-3xl font-bold text-[var(--gray-800)] mb-2'>Create your account</h1>

      <form onSubmit={submitHandler} className='flex flex-col gap-4 p-4'>

        <div className='flex gap-4'>
          <label className='w-1/2'>
            <p className='text-[var(--gray-color-navlink)] mb-1'>First Name <sup className='text-[var(--red-500)]'>*</sup></p>
            <input
              required
              type="text"
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
              className='w-full p-2 border border-[var(--gray-200)] rounded focus:outline-none focus:border-[var(--main-color-blue)]'
            />
          </label>

          <label className='w-1/2'>
            <p className='text-[var(--gray-color-navlink)] mb-1'>Last Name <sup className='text-[var(--red-500)]'>*</sup></p>
            <input
              required
              type="text"
              name='lastName'
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              className='w-full p-2 border border-[var(--gray-200)] rounded focus:outline-none focus:border-[var(--main-color-blue)]'
            />
          </label>
        </div>

        <label>
          <p className='text-[var(--gray-color-navlink)] mb-1'>Email <sup className='text-[var(--red-500)]'>*</sup></p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email'
            value={formData.email}
            className='w-full p-2 border border-[var(--gray-200)] rounded focus:outline-none focus:border-[var(--main-color-blue)]'
          />
        </label>

        <label className='relative'>
          <p className='text-[var(--gray-color-navlink)] mb-1'>Password <sup className='text-[var(--red-500)]'>*</sup></p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name='password'
            onChange={changeHandler}
            placeholder='Enter Password'
            value={formData.password}
            className='w-full p-2 border border-[var(--gray-200)] rounded focus:outline-none focus:border-[var(--main-color-blue)]'
          />
          <span className='absolute right-3 top-9 cursor-pointer text-[var(--gray-color-navlink)]'
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label className='relative'>
          <p className='text-[var(--gray-color-navlink)] mb-1'>Confirm Password <sup className='text-[var(--red-500)]'>*</sup></p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name='confirmPassword'
            onChange={changeHandler}
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            className='w-full p-2 border border-[var(--gray-200)] rounded focus:outline-none focus:border-[var(--main-color-blue)]'
          />
          <span className='absolute right-3 top-9 cursor-pointer text-[var(--gray-color-navlink)]'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button type='submit' className='w-full cursor-pointer bg-[var(--main-color-blue)] text-[var(--white-color)] py-2 rounded hover:bg-[var(--blue-900)] transition-all'>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm;
