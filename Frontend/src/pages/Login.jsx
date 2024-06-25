import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import logo from "../assets/logo.png"
import loginImg from "../assets/login.jpg"
import Input from "../components/Form/Input.jsx"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as authLogin, logout } from "../store/authSlice.js";
import authService from "../utils/auth.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const [ loading, setLoading ] = useState(false) 
const [ form, setForm ] = useState({
  email: "",
  password: '',
}) 

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm(values => ({...values, [name]: value}))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
    const session = await authService.login(form)
    if (session) {
      const userData = await authService.getCurrentUser()
      if (userData) {
        dispatch(authLogin({userData}))
        setLoading(false)
        navigate("/")
      } else {
        dispatch(logout())
      }
    }
    } catch (e) {
      alert("Error:" + e.message)
    }
  }

  return (
    <div className=" absolute z-50 max-md:bg-gray-300 w-screen min-h-screen bg-white">
      <Link to="/" className="z-40 py-2 px-4 flex bg-white items-center gap-6">
        <img src={logo} alt="Adventure Vault's Logo" width={60} height={600} />
        <h2 className="text-2xl font-bebasNeue text-green-600">Adventure Vault</h2>
      </Link>

      <div className="flex p-8 py-2 justify-center items-center w-full gap-4">

      <div className="relative flex justify-center items-center flex-col w-full md:w-[40%] bg-gray-300 h-[75vh] md:h-[85vh] rounded-lg p-4">
      <Link to={-1} className="absolute top-2 left-2">
        <button className='duration-200 hover:px-4 bg-black text-white rounded-full px-2 py-1 text-3xl'>
          <MdKeyboardBackspace />
        </button>
      </Link>
        <h3 className="text-center text-2xl md:text-3xl font-roboto font-semibold">Login To Your Account</h3>
        <p className="text-sm mb-6 text-center">We are glad to see you back with us !</p>
      <form className="md:w-[270px] w-full font-roboto flex flex-col items-center justify-center gap-4 text-sm ">
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
        <button
          type="button"
          onClick={handleSubmit}
          className="py-2 rounded-lg border-2 border-black hover:bg-green-600 hover:border-green-600 w-full bg-black text-white font-poppins uppercase duration-200"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <p className="text-sm font-roboto mt-2">
        Don't have an account? 
        <Link to="/signup" className="text-red-600 font-semibold">
          Sign Up
        </Link>
        </p>

      <p className=" font-bebasNeue text-xl my-4">or</p>

      <button onClick={alert} className="flex justify-center items-center gap-2 md:w-[270px] w-full py-2 border-2 mb-2 border-gray-800 text-gray-800 rounded-lg font-roboto text-sm">
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
      <button className="md:w-[270px] w-full py-2 border-2 border-gray-800 text-gray-800 flex justify-center items-center gap-2 rounded-lg font-roboto text-sm">
        <FaFacebook className="text-xl" />
        Continue with Facebook
      </button>
      </div>

        <div className="relative flex justify-center items-center max-md:hidden w-[50%] h-[85vh] rounded-lg overflow-hidden">
          <img src={loginImg} className=" w-full h-full absolute object-cover"  alt="Adventure Vault's Logo" />
        </div>

      </div>
    </div>
  );
};

export default Login;
        
  {/* <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button> */}

        {/* <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button> */}