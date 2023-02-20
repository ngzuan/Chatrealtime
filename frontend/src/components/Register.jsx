import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className=" bg-blue-50 h-screen flex justify-center ">
      <div className=" mt-24 border shadow-sm p-5 bg-white w-1/3 h-max  rounded-md ">
        <h1 className=" text-3xl mb-5 text-blue-300 text-center">WeChat</h1>
        <h1 className="mb-8 text-3xl text-center">Login</h1>
        <form className="flex flex-col ">
          <div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.username)}
              className="focus:border-blue-500 mb-4 p-3 border rounded-sm transition "
              type="text"
              id="email"
              name="loginUsername"
              placeholder="User or Email"
            />
            <label
              htmlFor="email"
              className="peer-focus:text-blue-500 font-semibold text-black transition left-0"
            >
              Email
            </label>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" mb-4 p-3 border rounded-sm "
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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" mb-4 p-3 border rounded-sm"
            type="text"
            name="loginUsername"
            placeholder="User or Email"
          />
          <button className="mb-4 text-center border p-1 bg-blue-600 text-white">
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

export default Register;
