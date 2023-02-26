import { useState } from "react";
import { Link } from "react-router-dom";
import ConnectSocket from "../clientSocket/ConnectSocket";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ConnectSocket();

  return (
    <div className=" bg-blue-50 h-screen flex justify-center ">
      <div className=" mt-24 border shadow-sm p-5 bg-white w-1/3 h-max  text-center rounded-md ">
        <h1 className=" text-3xl mb-5 text-blue-300 ">WeChat</h1>
        <h1 className="mb-8 text-3xl">Login</h1>
        <form className="flex flex-col ">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" mb-4 p-3 border rounded-sm"
            type="text"
            name="loginUsername"
            placeholder="User or Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" mb-3  p-3 border rounded-sm"
            type="password"
            name="loginPassword"
            placeholder="PassWord"
          />
          <button className="mb-4 border p-1 bg-blue-600 text-white">
            Login
          </button>
        </form>
        <Link to="/" className=" text-blue-500 ">
          Need an account? Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
