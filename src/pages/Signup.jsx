import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import authService from "../utils/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import loginImg from "../assets/login.jpg"
import Input from "../components/Form/Input.jsx"
import { login } from "../store/authSlice.js";

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", 
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm(values => ({...values, [name]: value}))
  }

  const handleSubmit = () => {
    const register = authService.createAccont(form)
    const user = authService.login(form)
    const userData = authService.getCurrentUser()
    console.log(userData)
    if (userData) {
      dispatch(login(userData));
      navigate("/")
    }
  }

  return (
    <div className="absolute z-50 max-md:bg-gray-300 w-screen min-h-screen bg-white">
      <Link to="/" className="bg-white z-40 py-2 px-4 flex items-center gap-6">
        <img src={logo} alt="Adventure Vault's Logo" width={60} height={600} />
        <h2 className="text-2xl font-bebasNeue text-green-600">Adventure Vault</h2>
      </Link>

      <div className=" flex p-8  py-2 justify-center items-center w-full gap-4">

      <div className="relative flex justify-center items-center flex-col w-full md:w-[40%] bg-gray-300 h-[70vh] md:h-[85vh] rounded-lg p-4">
      <Link to={-1} className="absolute top-2 left-2">
        <button className='duration-200 hover:bg-black hover:text-white rounded-full px-2 py-1 text-3xl'>
          <MdKeyboardBackspace />
        </button>
      </Link>
        <h3 className="text-center text-3xl font-roboto font-semibold">Register Your Account</h3>
        <p className="text-sm mb-6 text-center">We are glad to see you here !</p>
      <form className="md:w-[270px] w-full font-roboto flex flex-col items-center justify-center gap-4 text-sm ">
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="py-2 rounded-lg border-2 border-black hover:bg-green-600 hover:border-green-600 w-full bg-black text-white font-poppins uppercase duration-200"
        >
          Register
        </button>
      </form>
      <p className="text-sm font-roboto mt-2">Already have an account? <Link to="/login" className="text-red-600 font-semibold">Login</Link></p>
      <p className=" font-bebasNeue text-xl my-4">or</p>
      <button className="md:w-[270px] w-full py-2 border-2 mb-2 border-black rounded-lg font-poppins text-sm">Login with Google</button>
      <button className="md:w-[270px] w-full py-2 border-2 border-black rounded-lg font-poppins text-sm">Login with Facebook</button>
      </div>

        <div className=" relative flex justify-center items-center max-md:hidden w-[50%] h-[85vh] rounded-lg overflow-hidden">
          <img src={loginImg} className=" w-full h-full absolute object-cover"  alt="Adventure Vault's Logo" />
        </div>

      </div>
    </div>
  );
};

export default Signup;
        