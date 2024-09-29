import { Button, Label, TextInput, Toast } from "flowbite-react";
import NavBar from "../component/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import navlogo from "../assest/img/navlogo.png";
import FooterComp from "../component/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { userFailure, userStart, userSuccess } from "../Redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiCheck, HiX } from "react-icons/hi";

const SignUp = ({ isFixed }) => {
  const { currentUser, error, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const Register = async (e) => {
    e.preventDefault();

    dispatch(userStart());

    try {
      const { email, password } = data;

      if (!email || !password) {
        return dispatch(userFailure("fill all the fields"));
      }

      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data && response.data.msg) {
        dispatch(userSuccess(response.data));
        return navigate("/dashboard");
      }
    } catch (error) {
      if (error.response.data && error.response.data.msg) {
        return dispatch(userFailure(error.response.data.msg));
      } else {
        return dispatch(userFailure("sth went wrong"));
      }
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavBar isFixed={isFixed} />
      <div className="md:mt-20 flex justify-center items-center md:mb-52">
        <div className="flex flex-col space-y-8 md:flex-row md:max-w-3xl md:mx-auto md:space-x-8">
          {/* left side */}
          <div className="flex flex-col space-y-3 max-w-sm md:max-w-lg">
            <div className="flex space-x-2 justify-center items-center">
              <img src={navlogo} className="w-20" />
              <span className=" font-bold tracking-wider text-4xl text-gray-500">
                Kimeme
                <span className="text-red-600">Recipe</span>
              </span>
            </div>
            <p className=" font-semibold text-md md:pl-10">
              Explore thousands of unique recipes, from everyday meals to
              gourmet delights, crafted by our community and top chefs.
            </p>
          </div>
          {/* right side */}
          <div className=" flex flex-col justify-center items-center">
            <form className="w-full md:w-80 space-y-7" onSubmit={Register}>
              <div className="space-y-2">
                <div>
                  <Label
                    value="Email"
                    className=" text-md font-semibold tracking-widest "
                  />
                  <TextInput
                    placeholder="email"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label
                    value="Password"
                    className=" text-md font-semibold tracking-widest "
                  />
                  <TextInput
                    placeholder="*********"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button
                className="w-full"
                outline
                gradientDuoTone="pinkToOrange"
                type="submit"
              >
                Login
              </Button>
              <div className="flex  space-x-2 text-md font-semibold tracking-wider">
                <Link to="/login">
                  <span className="text-green-500 text-md">
                    Forget Password?
                  </span>
                </Link>
              </div>
            </form>
            {currentUser && (
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  {currentUser.msg}
                </div>
                <Toast.Toggle />
              </Toast>
            )}

            {error && (
              <Toast color="failure">
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-red-500 dark:bg-red-800 dark:text-green-200">
                  <HiX className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">{error}</div>
                <Toast.Toggle />
              </Toast>
            )}
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default SignUp;
