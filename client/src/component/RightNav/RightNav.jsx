import React from "react";
import Logo from "../../assest/img/eggferfer.png";
import { useSelector } from "react-redux";

const RightNav = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="dark:shadow-red-400 p-2 space-y-4 fixed top-20 right-5 left-auto px-5 py-5 shadow-md rounded-lg">
      {/* about */}

      <div className="flex justify-between items-stretch space-x-2 mb-12">
        <div>
          <img src={Logo} width={50} />
        </div>
        <div>
          <p className="font-semibold">
            {currentUser.rest.username.charAt(0).toUpperCase() +
              currentUser.rest.username.slice(1)}
          </p>
          <p className="text-sm">
            computer science | software developer | web developer
          </p>
        </div>
      </div>

      {/* suggesstion */}
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-lg font-gupter font-bold tracking-wide text-gray-600 dark:text-gray-400">
              Suggested for you
            </p>
            <p className="text-md font-semibold tracking-wider">See All</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={Logo} width={50} />
              <p>Bebe</p>
            </div>
            <p className="text-green-500">follow</p>
          </div>
        </div>
        {/* following */}
        <div className="space-y-2">
          <div>
            <p className="text-lg font-bold text-gray-500 dark:text-gray-400 font-gupter">
              following
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={Logo} width={50} />
              <p>Bebe</p>
            </div>
            <p className="text-green-500">follow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
