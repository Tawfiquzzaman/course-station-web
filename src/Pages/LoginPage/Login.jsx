import Lottie from "lottie-react";
import React, { use } from "react";
import { Link } from "react-router";
import loginAnimation from "../../assets/animation/loginanime.json"
import { AuthContext } from "../../context/Authcontext/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {

  const provider = new GoogleAuthProvider();

  const {signIn} = use(AuthContext);


  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

   signIn(email, password)
   .then(result => {
    console.log(result.user);
   })
   .catch(error => {
    console.log(error);
   })

    
  }

  //Google sign in
  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');

    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse p-20">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold eduvicfont">Please Login To Explore Courses</h1>
          <div>
            <Lottie loop={true} animationData={loginAnimation}></Lottie>
          </div>
          
        </div>
        <div className="card bg-[#D1D8BE] w-full max-w-sm shrink-0 shadow-2xl">
            
          <div className="card-body">
            <form className="fieldset" onSubmit={handleLogin}>
              <label className="label eduvicfont font-bold">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label eduvicfont font-bold">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                <p className="font-bold">
                    Are You A New User?{" "}
                    <Link className="text-red-700" to="/register">
                      Register
                    </Link>
                  </p>
              </div>
              <button className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-4 eduvicfont rounded-full">Login</button>
              {/* Google */}
                <button onClick={handleGoogleSignIn} className="btn bg-white hover:bg-black hover:text-white text-black border-[#e5e5e5] rounded-full">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
