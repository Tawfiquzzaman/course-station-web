import Lottie from "lottie-react";
import React, { use } from "react";
import registerAnime from "../../assets/animation/regsiteranime.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //password validation
  const validatePassword = (password, email) => {
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const emailCheck = !password.includes(email);

    if (!lengthCheck) return "Password must be at least 8 characters long.";
    if (!uppercaseCheck)
      return "Password must contain at least one uppercase letter.";
    if (!lowercaseCheck)
      return "Password must contain at least one lowercase letter.";
    if (!numberCheck) return "Password must contain at least one number.";
    if (!specialCharCheck)
      return "Password must contain at least one special character.";
    if (!emailCheck) return "Password should not contain your email address.";

    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;

    const passwordError = validatePassword(password, email);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (password !== confirmPass) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            toast.success("Registration successful!");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            toast.error("Profile update failed: " + error.message);
          });
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Authentication | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse p-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold eduvicfont">
            Please Register To Start Journey With Course Station
          </h1>
          <div>
            <Lottie loop={true} animationData={registerAnime}></Lottie>
          </div>
        </div>
        <div className="card bg-[#D1D8BE] w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset" onSubmit={handleRegister}>
              <label className="label eduvicfont font-bold">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Full Name"
                required
              />

              <label className="label eduvicfont font-bold">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label eduvicfont font-bold">Photo URL</label>
              <input
                name="photoUrl"
                type="text"
                className="input"
                placeholder="Photo URL"
              />

              <label className="label eduvicfont font-bold">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <label className="label eduvicfont font-bold">
                Confirm Password
              </label>
              <input
                name="confirmPass"
                type="password"
                className="input"
                placeholder="Confirm Your Password"
                required
              />

              <div>
                <p className="font-bold">
                  Already Registered?{" "}
                  <Link className="text-red-700" to="/login">
                    Login
                  </Link>
                </p>
              </div>

              <button className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-4 eduvicfont rounded-full">
                Register
              </button>

              {/* Google (Optional) */}
              <button
                type="button"
                className="btn bg-white hover:bg-black hover:text-white text-black border-[#e5e5e5] rounded-full mt-2"
              >
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
