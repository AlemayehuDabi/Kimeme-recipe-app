import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import FooterComp from "../../component/Footer/Footer";
import { Button, Card, Rating } from "flowbite-react";
import Gursha from "../../assest/img/gursha.jpg";
import { Link } from "react-router-dom";

const Profile = ({ isFixed }) => {
  return (
    <>
      <NavBar isFixed={isFixed} />
      <div className="w-3/5 mx-auto border-2 shadow-sm px-5 py-8 rounded-lg my-10">
        {/* header */}
        <div className=" flex justify-around sm:justify-between items-center mb-10">
          <div className="flex gap-5 items-center justify-center">
            <div>
              <img src={Gursha} className="w-20 h-20 rounded-full" />
            </div>
            <div>
              <p className="text-lg text-gray-600 font-bold ">Alex Dabi</p>
            </div>
          </div>
          <Button>Edit Profile</Button>
        </div>
        <hr className="mx-14" />
        {/* bio and about */}
        <div className="mt-10">
          <div>
            <h1 className="text-2xl tracking-wide text-red-600 font-bold">
              About
            </h1>
            <p className="pl-2 text-gray-500 font-serif">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur, iure et? Sed, corrupti vel! Consequatur, ipsum quam
              a, tenetur similique eos consectetur id, perspiciatis tempore
              quibusdam dolores nesciunt minus. Distinctio.
            </p>
          </div>
        </div>

        {/* recipe create and favioriate */}
        <div className="flex justify-between items-center mt-10">
          <div className="">
            <h1 className="text-center text-2xl tracking-wide text-gray-400 font-bold cursor-pointer hover:text-gray-500">
              Recipes Created
            </h1>
            <p className="text-center font-semibold text-lg text-gray-300 hover:text-gray-400">
              25
            </p>
          </div>
          <div>
            <h1 className="text-center text-2xl tracking-wide text-gray-400 font-bold cursor-pointer hover:text-gray-500">
              Favioriate
            </h1>
            <p className="text-center font-semibold text-lg text-gray-300 hover:text-gray-400">
              13
            </p>
          </div>
        </div>

        {/* recent recipe */}
        <div className="mt-10">
          <div>
            <h1 className="text-4xl text-red-500 hover:cursor-pointer hover:text-red-600 font-bold inline-block">
              Recent Recipes
            </h1>
          </div>

          {/* recipe */}
          <div className="flex flex-wrap justify-around gap-6 mt-10">
            <Card
              className="max-w-80 mx-2 md:max-w-60 lg:mx-0 hover:shadow-lg"
              imgSrc={Gursha}
              imgAlt="food-img"
            >
              <div className="flex space-y-10  flex-grow">
                <div className="flex justify-center items-center flex-grow ">
                  <div>
                    <h1 className="text-lg font-semibold text-red-600">
                      Gursha
                    </h1>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              className="max-w-80 mx-2 md:max-w-60 lg:mx-0 hover:shadow-lg"
              imgSrc={Gursha}
              imgAlt="food-img"
            >
              <div className="flex space-y-10  flex-grow">
                <div className="flex justify-center items-center flex-grow ">
                  <div>
                    <h1 className="text-lg font-semibold text-red-600">
                      Gursha
                    </h1>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              className="max-w-80 mx-2 md:max-w-60 lg:mx-0 hover:shadow-lg"
              imgSrc={Gursha}
              imgAlt="food-img"
            >
              <div className="flex space-y-10  flex-grow">
                <div className="flex justify-center items-center flex-grow ">
                  <div>
                    <h1 className="text-lg font-semibold text-red-600">
                      Gursha
                    </h1>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* button */}
        <div className="flex flex-col justify-center items-center mt-6">
          <Button color="success">
            <span className="text-md font-semibold">Follow</span>
          </Button>

          <div className="flex gap-5 mt-5 text-blue-500">
            <Link to="/setting">Settings</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Profile;
