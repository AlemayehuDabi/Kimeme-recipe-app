import { Button, Label, TextInput } from "flowbite-react";
import NavBar from "../component/NavBar/NavBar";
import { Link } from "react-router-dom";
import navlogo from "../assest/img/navlogo.png";
import FooterComp from "../component/Footer/Footer";

const SignUp = ({ isFixed }) => {
  return (
    <>
      <NavBar isFixed={isFixed} />
      <div className="md:mt-20 flex justify-center items-center md:mb-32">
        <div className="flex flex-col space-y-8 md:flex-row md:max-w-3xl md:mx-auto md:space-x-8">
          {/* left side */}
          <div className="flex flex-col  max-w-sm md:max-w-lg">
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
            <form className="w-full md:w-80 space-y-7">
              <div className="space-y-2">
                <div>
                  <Label
                    value="Username"
                    className=" text-md font-semibold tracking-widest "
                  />
                  <TextInput placeholder="username" type="text" />
                </div>
                <div>
                  <Label
                    value="Email"
                    className=" text-md font-semibold tracking-widest "
                  />
                  <TextInput placeholder="email" type="text" />
                </div>
                <div>
                  <Label
                    value="Password"
                    className=" text-md font-semibold tracking-widest "
                  />
                  <TextInput placeholder="*********" type="password" />
                </div>
              </div>
              <Button className="w-full" outline gradientDuoTone="pinkToOrange">
                Sign Up
              </Button>
              <div className="flex  space-x-2 text-md font-semibold tracking-wider">
                <Link to="/login">
                  Have account?
                  <span className="text-green-600 ml-2">Login</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default SignUp;
