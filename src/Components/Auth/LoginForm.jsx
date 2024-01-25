"use client";

import { ErrorToast,SuccessToast,IsEmail,IsEmpty } from "@/utils/FormHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(IsEmpty(loginData.email)){
        return ErrorToast("Email box is empty!")
    }
    const options = { method: "POST", body: JSON.stringify(loginData) };
    let res = await (await fetch("/api/user/login", options)).json();
    if (res.status === 'success') {
        SuccessToast("you have logged IN!")
        router.back()
    }else{
        ErrorToast(res.status)
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-xl lg:mx-auto my-10 mx-5">
      <h2 className="text-2xl mt-16 pb-8 wavy-underline">
        <span className="text-themeColor font-bold">Login</span>
      </h2>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-themeColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required=""
          value={loginData.email}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          email
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-themeColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required=""
          value={loginData.password}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      <p className="text-gray-500 mb-3 hover:underline">
        <Link href={"/user/registration"}>
          I have no account. Please sign Up...
        </Link>
      </p>
      <button
        type="submit"
        className="text-white bg-themeColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
