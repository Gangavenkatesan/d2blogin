import "../asset/css/signup.css"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { useEffect } from "react";
import { useState } from "react";

const SignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".container");

    if (isSignUpMode) {
      container.classList.add("sign-up-mode");
    } else {
      container.classList.remove("sign-up-mode");
    }
  }, [isSignUpMode]);



  
  return (
    <section>
      <div className="container">
        <div className="signin-signup">
          <form action="" className="sign_form" id="sign-in-form">
            <h2 className="title" id="login_title">Login</h2>

<div className="social-media">
              <a href="#" className="social-icon">
                <FaFacebookSquare className="face" />
              </a>
              <a href="#" className="social-icon">
                <IoLogoLinkedin  />
              </a>
              <a href="#" className="social-icon">
                <FaSquareGooglePlus />
              </a>
            </div>  
            <p className="icon-text">or sign up with social platform</p>   
              <div className="sign_design">
              <div className="input-field">
              <HiUsers  />
                <input type="text" placeholder="username" className="input-sign" />
              </div>
              <div className="input-field">
                <RiLockPasswordFill />
                <input type="password" placeholder="password" className="input-sign" />
              </div>
              <input type="submit" value="login" className="btn"/>
              </div>
          </form>

          
          <form action="" className="sign_form" id="sign-up-form">
           <h1 className="account"> Create Account</h1>
            <h2 className="titles">Sign up</h2>
            <div className="social-media2">
              <a href="#" className="social-icons">
                <FaFacebookSquare  className="face"/>
              </a>
              <a href="#" className="social-icons">
                <IoLogoLinkedin className="link" />
              </a>
              <a href="#" className="social-icons">
                <FaSquareGooglePlus  className="plus"/>
              </a>
            </div>            
            <p className="social-text">or sign up with social platform</p>
            <div className="sign_design2">
            <div className="input-field">
              <HiUsers />
              <input type="text" placeholder="username" className="input-sign" />
            </div>
            <div className="input-field">
              <MdEmail />
              <input type="email" placeholder="email" className="input-sign" />
            </div>
            <div className="input-field">
              <RiLockPasswordFill />
              <input type="password" placeholder="password" className="input-sign" />
            </div>
            <div className="input-field">
              <select id="options" className="input-sign">
                <option value="customer">customer</option>
                <option value="creator">creator</option>
              </select>
            </div>
            <input type="submit" value="sign up" className="btn" />
           
            
            </div>
          </form>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>meneveras of bravb</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt at dicta quaerat laborum veritatis, ipsa repellendus asperiores reprehenderit voluptates non sequi corrupti reiciendis voluptatum eaque exercitationem, facilis quibusdam fuga voluptate?</p>
              <button className="btn_detail" id="sign-in-btn" onClick={() => setIsSignUpMode(false)}>
                sign in
              </button>
              <img src="img/house.jpg" alt="add" className="image" />
            </div>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>meneveras of bravb</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt at dicta quaerat laborum veritatis, ipsa repellendus asperiores reprehenderit voluptates non sequi corrupti reiciendis voluptatum eaque exercitationem, facilis quibusdam fuga voluptate?</p>
              <button className="btn_detail" id="sign-up-btn" onClick={() => setIsSignUpMode(true)}>
                sign up
              </button>
              <img src="img/house.jpg" alt="add" className="image" />
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default SignUp;
