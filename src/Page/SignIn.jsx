import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import user from "../assects/Svg/user.svg";
import pass from "../assects/Svg/psd.svg";



const SignIn = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeButton, setActiveButton] = useState("Buy");
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();

    const token = `${email}:${name}:${new Date().getTime()}`;
    onLogin(token);

    navigate("/");
  };



  return (
    <div className="bg-sign">
      <div className="flex gap-x-[5rem] max-w-[1200px] w-[100%] mx-auto items-center justify-between min-h-screen py-[50px]">
        <div className="w-[55%]">
          <p className="text-[18px] font-[500] text-[#ffff]">
          SIGN IN
          </p>
          <h3 className="text-[42px] font-[800] text-[#fff]">
          Login to your account.
          </h3>
          <form
            onSubmit={handleSubmit}
            className="rounded shadow-md max-w-[416px] w-[100%] pt-[30px]"
          >
            {/* Name Field */}
            <div className="mb-4 px-6 py-2 space-y-1 bg-[#333] rounded-[12px]">
              <div className="flex space-x-1 items-center">
                <input
                  type="email"
                  placeholder="Email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#333] text-[#fff] placeholder:text-white p-1 rounded outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4 px-6 py-2 space-y-1 bg-[#333] rounded-[12px]">
              <div className="flex space-x-1 items-center">
                <input
                  type="password"
                  placeholder="Password"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#333] text-[#fff] placeholder:text-white p-1 rounded outline-none"
                  required
                />
                <img src={pass} alt="" />
              </div>
            </div>

            <button
              type="submit"
              className="h-[49px] bg-[#E5AE00] relative flex justify-center items-center text-[#000] text-[16px] font-[700] py-2 px-4 rounded w-full"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
