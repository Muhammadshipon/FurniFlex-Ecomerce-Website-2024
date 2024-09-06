import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import bannerImage from "../assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 w-full px-5 lg:px-0">
        {/* Form Section */}
        <div className="flex items-center justify-center lg:w-1/2 w-full">
          <div className="bg-slate-50  p-5 lg:p-10 w-full max-w-lg">
            {/* Heading */}
            <div className="text-center mb-5">
              <h2 className="text-2xl font-semibold text-black mb-1">
                Welcome To
              </h2>
              <h1 className="text-black font-bold text-4xl">
                Furni<span className="text-blue-400">Flex</span>
              </h1>
              <p>Signup to purchase your desired products</p>
            </div>

            {/* Form */}
            <form>
              <div className="flex flex-col lg:flex-row gap-5">
                <TextField
                  id="filled-basic"
                  label="First name (optional)"
                  variant="filled"
                  className="w-full"
                  sx={{
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                      border: "2px solid gray",
                    },
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Last name (optional)"
                  variant="filled"
                  className="w-full"
                  sx={{
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                      border: "2px solid gray",
                    },
                  }}
                />
              </div>

              <div className="mt-5">
                <TextField
                  className="w-full"
                  id="filled-basic"
                  label="Email Address"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                      border: "2px solid gray",
                    },
                  }}
                />
              </div>

              <div className="mt-5 relative">
                <TextField
                  type={showPassword ? "text" : "password"}
                  className="w-full"
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                      border: "2px solid gray",
                    },
                  }}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {showPassword ? (
                    <FaEyeSlash
                      className="text-2xl"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="text-2xl"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </span>
              </div>

              <div className="mt-4">
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the Terms & Policy"
                  className="text-sm"
                />
              </div>

              <Button
                className="w-full mt-4"
                sx={{ backgroundColor: "black", padding: "10px" }}
                variant="contained"
              >
                Signup
              </Button>
            </form>

            <div className="divider mt-5">OR</div>

            {/* Social Media Sign In */}
            <div className="flex flex-col lg:flex-row justify-between gap-5 mt-4">
              <Button
                variant="outlined"
                size="medium"
                className="w-full text-sm"
                sx={{ color: "black", paddingY: "10px",fontSize:"12px",fontWeight:"bold" }}
              >
                <FcGoogle className="text-2xl mr-2" />
                Sign In With Google
              </Button>
              <Button
                variant="outlined"
                size="medium"
                className="w-full"
                sx={{ color: "black", paddingY: "10px",fontSize:"12px",fontWeight:"bold" }}
              >
                <FaGithub className="text-2xl mr-2" />
                Sign In With Github
              </Button>
            </div>

            <p className="text-center text-black mt-5">
              Have an account?<Link to={'/sign-in'}><span className="text-blue-600">Sign In</span></Link>
            </p>
          </div>
        </div>

        {/* Banner Section */}
        <div className="lg:w-1/2 w-full">
          <div
            className="hero lg:h-[800px] h-[300px]"
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <div className="flex justify-center mb-2">
                  <img
                    src="/src/assets/Furniflexicon.png"
                    alt=""
                    className="w-[50px] lg:w-[70px]"
                  />
                </div>
                <h1 className="text-white mb-5 font-bold text-2xl lg:text-4xl">
                  Furni<span className="text-blue-400">Flex</span>
                </h1>
                <p className="mb-5 text-sm lg:text-base">
                  Discover a seamless shopping experience with our curated
                  collection of products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
