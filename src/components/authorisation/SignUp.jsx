import React from 'react'

const SignUp = ({ theme }) => {
    
    const bgColor = theme === 'cupcake' ? 'bg-white' : 'bg-black';
    
    const textColor = theme === 'cupcake' ? 'text-gray-800' : 'text-gray-600';

    return (
    <div className='flex justify-center items-center h-screen'>
        <>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
            <div
            className="relative px-4 py-10 ${bgColor} mx-8 md:mx-0 shadow rounded-3xl sm:p-10 border-2"
            >
            <div className="max-w-md mx-auto ${textColor} ">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label
                    className="font-semibold text-sm text-gray-400 pb-1 block"
                    for="fullname"
                    >Full Name</label>
                    <input
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white border-gray-800 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="fullname"
                    />
                </div>
                <div>
                    <label
                    className="font-semibold text-sm text-gray-400 pb-1 block"
                    for="email"
                    >Email</label>
                    <input
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white border-gray-800 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    />
                </div>
                <div>
                    <label
                    className="font-semibold text-sm text-gray-400 pb-1 block"
                    for="username"
                    >Username</label>
                    <input
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white border-gray-800 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="username"
                    />
                </div>
                <div>
                    <label
                    className="font-semibold text-sm text-gray-400 pb-1 block"
                    for="password"
                    >Password</label>
                    <input
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white border-gray-800 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    type="password"
                    id="password"
                    />
                </div>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label
                    className="font-semibold text-sm text-gray-400 pb-1 block"
                    for="dob"
                    >Date of Birth</label>
                    <input
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white border-gray-800 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    type="date"
                    id="dob"
                    />
                </div>
                <div>
                    <label
                    className="font-semibold text-sm text-gray-400 pb-1 block"
                    for="gender"
                    >Gender</label>
                    <select
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-white border-gray-800 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    id="gender"
                    >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                </div>
                
                
                <div className="mt-5">
                <button
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    type="submit"
                >
                    Sign up
                </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <a
                    className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                    href="#"
                    >have an account? Log in</a>
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
            </div>
        </div>
    </>
  </div>
  )
}

export default SignUp