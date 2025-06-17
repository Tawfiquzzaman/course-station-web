import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from "../../assets/animation/loginanime.json";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();

  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  //Google sign in
  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed: " + error.message);
      });
  };

  //Github sign in
  const handleGithubSignIn = () => {
    console.log("GitHub Sign in Clicked");

    signInWithPopup(auth, providerGithub)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("GitHub login failed: " + error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
              <title>Authentication | Login</title>
            </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse p-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold eduvicfont">
            Please Login To Explore Courses
          </h1>
          <div>
            <Lottie loop={true} animationData={loginAnimation}></Lottie>
          </div>
        </div>
        <div className="card bg-[#D1D8BE] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleLogin}>
              <label className="label eduvicfont font-bold">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label eduvicfont font-bold">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-.94.13-1.85.375-2.713m3.153 2.58A5.975 5.975 0 0012 18c1.14 0 2.199-.32 3.097-.874M19.425 15.997A9.964 9.964 0 0021 12c0-5.523-4.477-10-10-10-.637 0-1.26.061-1.867.18"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm4.243 4.243A9.956 9.956 0 0021 12a9.956 9.956 0 00-1.757-5.757m-2.122 2.122A5.978 5.978 0 0012 6c-1.14 0-2.199.32-3.097.874M6.343 6.343A9.956 9.956 0 003 12c0 5.523 4.477 10 10 10 1.393 0 2.716-.292 3.9-.817"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                <p className="font-bold">
                  Are You A New User?{" "}
                  <Link className="text-red-700" to="/register">
                    Register
                  </Link>
                  {error && (
                    <p className="text-red-600 mt-2 font-semibold">{error}</p>
                  )}
                </p>
              </div>
              <button className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-4 eduvicfont rounded-full">
                Login
              </button>
              {/* Google */}
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white hover:bg-black hover:text-white text-black border-[#e5e5e5] rounded-full cursor-pointer"
              >
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

              {/* Github login button */}
              <button
                onClick={handleGithubSignIn}
                className="btn bg-black hover:bg-white hover:text-black text-white border-black rounded-full"
              >
                <div className="text-white hover:text-black">
                  <svg
                    aria-label="GitHub logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    ></path>
                  </svg>
                </div>
                Login with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
