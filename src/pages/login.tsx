// Updated Login.tsx with consolidated FormInput
import { Link, useNavigate } from "react-router-dom";
import { Lock, Logo, UserIcon } from "../assets/svg/svg";
import FormInput from "../components/auth/FormInput";
import FormCheckBox from "../components/auth/FormCheckBox";
import login from "../assets/login.webp";
import { useState, type FormEvent } from "react";
import { ClipLoader } from "react-spinners";
import { RoutePaths } from "../routes/routesPath";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(RoutePaths.DASHBOARD);
    }, 1000);
  };

  return (
    <div className="grid h-screen grid-cols-1 px-5 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-4 mt-10 mb-7">
        <div className="w-full max-w-xl mx-auto ">
          <Logo />

          <form className="mt-10 lg:mt-25" onSubmit={handleSubmit}>
            <div className="mb-10 text-dark">
              <h1 className="mb-3 text-2xl font-medium ">Hi, Welcome Back!</h1>

              <p className="text-sm">Please sign in using your credentials.</p>
            </div>

            <div className="mb-2 space-y-7">
              <FormInput
                icon={<UserIcon />}
                label="Username"
                placeholder="Enter your username"
                required
              />
              <FormInput
                type="password"
                icon={<Lock />}
                label="Password"
                placeholder="Enter your password"
                required
              />
            </div>

            <Link to={""} className="text-sm text-dark hover:underline">
              Forgot password
            </Link>

            <div className="mt-6 mb-13">
              <FormCheckBox label="Remember me" required />
            </div>

            <button
              disabled={loading}
              className="disabled:opacity-85 cursor-pointer w-full h-11 bg-[#014DAF] hover:bg-[#014DAF]/90 rounded-lg text-center text-white font-medium"
            >
              {loading ? <ClipLoader color="white" size={16} /> : "Login"}
            </button>
          </form>
        </div>

        <p className="text-[#808080] text-sm">
          © 2025 Mercator Technologies Ltd. All rights reserved.
        </p>
      </div>
      <div className="hidden p-5 lg:block">
        <img
          src={login}
          alt="login_image"
          className="aspect-[2] w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default Login;
