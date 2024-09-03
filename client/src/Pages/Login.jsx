import { Button, Label, TextInput } from "flowbite-react";
import NavBar from "../component/NavBar/NavBar";
import { Link } from "react-router-dom";
import navlogo from "../assest/img/navlogo.png";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <div className="md:mt-20 flex justify-center items-center">
        <div className="flex flex-col space-y-8  md:flex-row md:max-w-3xl md:mx-auto md:space-x-8">
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
            <form className="w-full md:w-80 space-y-7">
              <div className="space-y-2">
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
                Login
              </Button>
              <div className="flex  space-x-2 text-md font-semibold tracking-wider">
                <Link to="/login">
                  Forget Password?
                  <span className="text-green-600 ml-2">Forget</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
