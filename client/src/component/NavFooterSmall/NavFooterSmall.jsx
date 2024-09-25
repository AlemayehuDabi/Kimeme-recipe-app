import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd, IoMdNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavFooterSmall = () => {
  return (
    <div className="flex justify-between py-3 px-8 bg-red-200 rounded-lg border-2 border-red-300 mx-6 w-full my-1">
      <Link to="/dashboard" className="dark:text-black">
        <IoHomeOutline size={22} />
      </Link>
      <Link to="/search" className="dark:text-black">
        <LuSearch size={22} />
      </Link>
      <Link
        to="/create-recipe"
        className="dark:text-black border-2 border-black rounded-full"
      >
        <IoMdAdd size={22} />
      </Link>
      <Link to="/notification" className="dark:text-black">
        <IoMdNotificationsOutline size={24} />
      </Link>
      <Link to="/profile" className="dark:text-black">
        <CgProfile size={22} />
      </Link>
    </div>
  );
};

export default NavFooterSmall;
