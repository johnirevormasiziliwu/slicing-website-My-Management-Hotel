import React from "react";

function Login() {
  return (
    <div className="container bg-custom-background w-full h-screen bg-center bg-cover justify-center flex py-8  ">
      <div className="content flex items-center gap-64 ">
        <div className="title">
          <h3 className="text-white font-[600] text-[28px] leading-7 font-parisiene">Hotel Citra Megah</h3>
          <h1 className="text-white font-poppins font-[600] text-[48px] leading-[52.8px] pt-5">Selamat Datang Di <br /> Hotel Citra Megah</h1>
          <p className="text-white font-poppins font-[400] text-[16px] leading-6 pt-5">
            Hotel Citra Megah - Hotel bintang lima terbaik di INDONESIA
          </p>
        </div>
        <div className="register bg-custom-white w-[484px] h-full rounded-[26px] p-[2rem] ">
          <h3 className="text-center font-[800] text-[28px] leading-7  text-dark-navy-blue font-parisiene">
            Hotel Citra Megah
          </h3>
          <p className="text-center font-[400] font-poppins text-[16px] leading-6 text-dark-gray pt-3 pb-10">
            Please enter your email and password
          </p>
          <div className="form-register">
            <label
              htmlFor="email-or-username "
              className="font-poppins font-[500] text-[16px] leading-6 text-midnight-blue "
            >
              Email or Username
            </label>
            <div className="email-or-username pt-2 ">
              <input
                type="email"
                id="email"
                className="h-[50px] border-[2px] w-full bg-custom-white border-white px-3 font-poppins focus:outline-none "
                placeholder="Enter your email or username "
              />
            </div>
            <div className="title-password pt-8 py-1">
              <label
                htmlFor="email-or-username "
                className="font-poppins font-[500] text-[16px] leading-6 text-midnight-blue "
              >
                Password
              </label>
              <a
                href="#"
                className="float-end font-[400] text-[15px] leading-[22.5px] text-[#EC4C57] font-poppins"
              >
                Forget Password ?
              </a>
            </div>
            <div className="password pt-2 ">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="h-[50px] border-[2px] w-full bg-custom-white border-white px-3 font-poppins focus:outline-none "
                />
                <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 absolute top-3 right-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                </button>
                
              </div>
            </div>
          </div>
          <div className="remember flex gap-3 items-center pt-3">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-4 h-4"
            />
            <label
              htmlFor="remember me"
              className="font-poppins font-[400] text-[16px] leading-6 text-[#464B5A]"
            >
              Remember Me
            </label>
          </div>
          <button className="w-full bg-[#162034] text-[#FFFFFFE5] p-3 font-poppins font-[500] text-[16px] leading-6 my-5">Sign In</button>
          <div className="singin-social-media">
            <p className="font-poppins text-center font-[400] text-[16px] leading-6 text-[#464B5A] pb-3">Or Sign in With</p>
            <div className="social-media flex gap-3 justify-center">
              <button>
                <img src="/src/image/social-media/facebook.png" alt="Facebook" />
              </button>
              <button>
                <img src="/src/image/social-media/google.png" alt="Google" />
              </button>
              <button>
                <img src="/src/image/social-media/twitter.png" alt="Twitter" />
              </button>
              <button>
                <img src="/src/image/social-media/github.png" alt="Github" />
              </button>
            </div>
            <p className="text-center font-poppins font-[400] text-[16px] leading-6 pt-8">Don't have account ? <a href="#" className="text-[#1D7C82]">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
