import Logo from "../../assest/img/eggferfer.png";
import { RiEditLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

const LeftNav = () => {
  const Pagination =
    "flex space-x-3 items-center cursor-pointer bg-red-50 hover:bg-red-100 p-2 rounded-md";
  const PaginationPara =
    "text-lg font-normal text-gray-600 hover:text-gray-900 ";

  const followAndPost =
    "space-y-2  py-1 px-4 bg-red-50 text-gray-600 hover:bg-red-100 rounded-md cursor-pointer";

  return (
    <section className="rounded-md px-4 pb-2 fixed top-20 shadow-md hover:shadow-lg left-5 right-auto dark:shadow-red-400">
      <div className="py-2">
        {/* top */}
        <div className="flex justify-between items-center px-2">
          {/* account */}
          <div className="flex space-x-2 items-center cursor-pointer">
            <img src={Logo} width={50} />
            <div>
              <p className="text-lg font-bold text-gray-700">Alex</p>
              <p className="text-sm font-semibold text-gray-400">usa</p>
            </div>
          </div>

          {/* edit account */}
          <div className="cursor-pointer">
            <RiEditLine size={20} />
          </div>
        </div>
        <hr className="my-5 w-72 mx-auto" />
        {/* follower post and following */}
        <div className="grid grid-cols-3 space-x-2">
          <div className={`${followAndPost}`}>
            <p className="text-center">Followers</p>
            <p className="text-center">0</p>
          </div>
          <div className={`${followAndPost}`}>
            <p className="text-center">Post</p>
            <p className="text-center">0</p>
          </div>
          <div className={`${followAndPost}`}>
            <p className="text-center">Following</p>
            <p className="text-center">0</p>
          </div>
        </div>

        {/* after logo */}
        <div className="flex flex-col px-10  pt-4 gap-3">
          {/* home page */}
          <a href="/dashboard">
            <div className={`${Pagination}`}>
              <IoHomeOutline size={22} />
              <p className={`${PaginationPara}`}>Home</p>
            </div>
          </a>
          {/* search */}
          <a href="/search">
            <div className={`${Pagination}`}>
              <LuSearch size={22} />
              <p className={`${PaginationPara}`}>Search</p>
            </div>
          </a>
          {/* profile */}
          <a href="/profile">
            <div className={`${Pagination}`}>
              <CgProfile size={22} />
              <p className={`${PaginationPara}`}>Profile</p>
            </div>
          </a>
          {/* notification */}
          <a href="/notification">
            <div className={`${Pagination}`}>
              <IoMdNotificationsOutline size={24} />
              <p className={`${PaginationPara}`}>Notification</p>
            </div>
          </a>
          {/* create-recipe */}
          <a href="/create">
            <div className={`${Pagination}`}>
              <IoMdAdd size={24} />
              <p className={`${PaginationPara}`}>Create</p>
            </div>
          </a>
          {/* logout */}
          <a href="/logout">
            <div className={`${Pagination}`}>
              <MdOutlineLogout size={22} />
              <p className={`${PaginationPara}`}>Logout</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeftNav;
