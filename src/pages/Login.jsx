import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import authService from "../utils/auth";

import logo from "../assets/logo.png"
import login from "../assets/login.jpg"
import Input from "../components/Form/Input.jsx"

const Login = () => {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="absolute z-50 max-md:bg-gray-300 w-screen min-h-screen bg-white">
      <Link to="/" className="z-40 py-2 px-4 flex bg-white items-center gap-6">
        <img src={logo} alt="Adventure Vault's Logo" width={60} height={600} />
        <h2 className="text-2xl font-bebasNeue text-green-600">Adventure Vault</h2>
      </Link>

      <div className="flex p-8 py-2 justify-center items-center w-full gap-4">

      <div className="relative flex justify-center items-center flex-col w-full md:w-[40%] bg-gray-300 h-[60vh] md:h-[85vh] rounded-lg p-4">
      <Link to={-1} className="absolute top-2 left-2">
        <button className='duration-200 hover:bg-black hover:text-white rounded-full px-2 py-1 text-3xl'>
          <MdKeyboardBackspace />
        </button>
      </Link>
        <h3 className="text-center text-3xl font-roboto font-semibold">Login To Your Account</h3>
        <p className="text-sm mb-6 text-center">We are glad to see you back with us !</p>
      <form className="md:w-[270px] w-full font-roboto flex flex-col items-center justify-center gap-4 text-sm ">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => authService.login(email, password)}
          className="py-2 rounded-lg border-2 border-black hover:bg-green-600 hover:border-green-600 w-full bg-black text-white font-poppins uppercase duration-200"
        >
          Login
        </button>
      </form>
      <p className="text-sm font-roboto mt-2">Don't have an account? <Link to="/signup" className="text-red-600 font-semibold">Sign Up</Link></p>
      <p className=" font-bebasNeue text-xl my-4">or</p>
      <button className="md:w-[270px] w-full py-2 border-2 mb-2 border-black rounded-lg font-poppins text-sm">Login with Google</button>
      <button className="md:w-[270px] w-full py-2 border-2 border-black rounded-lg font-poppins text-sm">Login with Facebook</button>
      </div>

        <div className="relative flex justify-center items-center max-md:hidden w-[50%] h-[85vh] rounded-lg overflow-hidden">
          <img src={login} className=" w-full h-full absolute object-cover"  alt="Adventure Vault's Logo" />
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