import React from "react";
import photo from "../../assest/img/eggferfer.png";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiEmotionHappyLine } from "react-icons/ri";

const Post = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <section className="space-y-10 mb-14 mdd:mb-0">
      <div className="dark:shadow-red-400 rounded-lg px-5 shadow-md pb-3">
        {/* top */}
        <div className="flex justify-between items-center  py-2">
          {/* left side */}
          <div className="flex space-x-4">
            <img src={photo} width={50} />
            <div>
              {/* name */}
              <p className="text-lg font-bold font-Poppins text-gray-600">
                {currentUser.rest.username.charAt(0).toUpperCase() +
                  currentUser.rest.username.slice(1)}
              </p>
              {/* locations */}
              <p className="text-sm text-gray-500 font-semibold">USA</p>
            </div>
          </div>

          {/* right side: time */}
          <div>
            <p className="text-sm font-medium tracking-wide text-gray-400">
              2 min ago
            </p>
          </div>
        </div>

        {/* middle: paragraph */}
        <div>
          <div className="px-2 pt-5 pb-2 sm:text-sm font-Lora">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              maxime, ratione possimus accusamus quas nemo fugiat eligendi quia
              officia necessitatibus laboriosam delectus ut? Praesentium,
              architecto ab asperiores totam doloremque dolorum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ad dignissimos
              laboriosam, esse perferendis dolorum id tempore consequuntur
              velit, sunt cupiditate culpa minus et, pariatur odio vitae iusto
              explicabo. Maiores, enim.
            </p>
          </div>
        </div>

        {/* images */}
        <div className="flex justify-center">
          <img src={photo} width={300} />
        </div>

        {/* reactions */}
        <div className="flex justify-between items-center  my-4">
          <div className="flex gap-4">
            {/* like */}
            <div>
              <FiHeart size={25} />
            </div>
            {/* comment */}
            <div>
              <FaRegComment size={25} />
            </div>
            {/* rating */}
            <div>
              <FaRegStar size={25} />
            </div>
          </div>
          <div>
            <MdOutlineBookmarkBorder size={25} />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-sm">2800 likes</p>
          </div>
          <div>
            <p className="text-gray-400 text-md tracking-wide">
              view all 7 comment
            </p>
            <form className="flex justify-between items-center gap-3">
              <input
                placeholder="Add a comment..."
                className="w-full dark:bg-gray-800 outline-none text-md text-gray-700"
              />
              <RiEmotionHappyLine size={15} />
            </form>
            <hr className="w-full mt-3" />
          </div>
        </div>
      </div>

      <div className="dark:shadow-red-400 rounded-lg px-5 shadow-md pb-3">
        {/* top */}
        <div className="flex justify-between items-center  py-2">
          {/* left side */}
          <div className="flex space-x-4">
            <img src={photo} width={50} />
            <div>
              {/* name */}
              <p className="text-lg font-bold font-Poppins text-gray-600">
                {currentUser.rest.username.charAt(0).toUpperCase() +
                  currentUser.rest.username.slice(1)}
              </p>
              {/* locations */}
              <p className="text-sm text-gray-500 font-semibold">USA</p>
            </div>
          </div>

          {/* right side: time */}
          <div>
            <p className="text-sm font-medium tracking-wide text-gray-400">
              2 min ago
            </p>
          </div>
        </div>

        {/* middle: paragraph */}
        <div>
          <div className="px-2 pt-5 pb-2 sm:text-sm font-Lora">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              maxime, ratione possimus accusamus quas nemo fugiat eligendi quia
              officia necessitatibus laboriosam delectus ut? Praesentium,
              architecto ab asperiores totam doloremque dolorum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ad dignissimos
              laboriosam, esse perferendis dolorum id tempore consequuntur
              velit, sunt cupiditate culpa minus et, pariatur odio vitae iusto
              explicabo. Maiores, enim.
            </p>
          </div>
        </div>

        {/* images */}
        <div className="flex justify-center">
          <img src={photo} width={300} />
        </div>

        {/* reactions */}
        <div className="flex justify-between items-center  my-4">
          <div className="flex gap-4">
            {/* like */}
            <div>
              <FiHeart size={25} />
            </div>
            {/* comment */}
            <div>
              <FaRegComment size={25} />
            </div>
            {/* rating */}
            <div>
              <FaRegStar size={25} />
            </div>
          </div>
          <div>
            <MdOutlineBookmarkBorder size={25} />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="font-bold text-sm">2800 likes</p>
          </div>
          <div>
            <p className="text-gray-400 text-md tracking-wide">
              view all 7 comment
            </p>
            <form className="flex justify-between items-center gap-3">
              <input
                placeholder="Add a comment..."
                className="w-full dark:bg-gray-800 outline-none text-md text-gray-700"
              />
              <RiEmotionHappyLine size={15} />
            </form>
            <hr className="w-full mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
