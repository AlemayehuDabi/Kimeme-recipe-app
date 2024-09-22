import React from "react";
import Logo from "../../assest/img/eggferfer.png";

const RightNav = () => {
  return (
    <div className="dark:shadow-red-400 p-2 space-y-4 fixed top-20 right-5 left-auto px-5 py-5 shadow-md rounded-lg">
      {/* about */}

      <div className="flex justify-between items-stretch space-x-2 mb-12">
        <div>
          <img src={Logo} width={50} />
        </div>
        <div>
          <p>Alex</p>
          <p className="text-sm">
            computer science | software developer | web developer
          </p>
        </div>
      </div>

      {/* suggesstion */}
      <div className="space-y-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-lg font-gupter font-bold tracking-wide text-gray-600">
              Suggested for you
            </p>
            <p className="text-sm font-semibold tracking-wider text-gray-900">
              See All
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
        {/* following */}
        <div className="space-y-2">
          <div>
            <p className="text-lg font-bold text-gray-500 font-gupter">
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
