"use client"
import { ErrorToast,SuccessToast,IsEmail,IsEmpty } from "@/utils/FormHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: ""
      });
    
      const router = useRouter()
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const options = { method: "POST", body: JSON.stringify(formData) };
        let res = await (await fetch("/api/user/registration", options)).json();
        if (res.status === 'success') {
            SuccessToast("Registration completed!")
            router.push("/user/login")
        }else{
            ErrorToast(res.status)
            console.log(res);
        }
      };
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl lg:mx-auto my-10 mx-5">
      <h2 className="wavy-underline text-2xl mt-16 pb-8 text-center">
        <span className="text-themeColor font-bold">Registration</span>
      </h2>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-themeColor focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            value={formData.firstName}
            onChange={(e)=> handleInputChange(e)}
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-themeColor peer"
            placeholder=" "
            required
            value={formData.lastName}
            onChange={(e)=> handleInputChange(e)}
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:border-themeColor focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
          value={formData.email}
          onChange={(e)=> handleInputChange(e)}
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
          required
          value={formData.password}
          onChange={(e)=> handleInputChange(e)}
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>

      <div className="grid md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="mobile"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-themeColor focus:outline-none focus:ring-0 peer"
            placeholder=" "
            required
            value={formData.mobile}
            onChange={(e)=> handleInputChange(e)}
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
      </div>
      <p className="text-gray-500 mb-3 hover:underline">
        <Link href={"/user/login"}>
          Already have an account. Please sign In...
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

export default RegistrationForm;
