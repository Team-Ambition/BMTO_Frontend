import React from "react";
import { useNavigate } from "react-router-dom";

import "./CSS/Login.css";

const Register = () => {
  const history = useNavigate();
  return (
    <div className="Login_Container">
      <div className="Login_ProfileImg">
        <img src="../../Img/LoginProfile.svg" alt="" />
      </div>

      <div className="Login_Form">
        <div className="Login_Title">User Sign In!</div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>

      <div className="Login_Divider">
        <div className="Login_Divider_InnerText">OR</div>
      </div>

      <div className="Login_Auth_Form">
        <img src="../../Img/GoogleAuthIcon.svg" alt="" />
      </div>

      <div
        className="Login_To_Register"
        onClick={() => {
          history("/auth/register");
        }}
      >
        Don't have an account?
      </div>
    </div>
  );
};

export default Register;
