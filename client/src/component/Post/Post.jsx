import React from "react";
import photo from "../../assest/img/eggferfer.png";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

const Post = () => {
  return (
    <section className="space-y-10">
      <div className="border-2 rounded-lg shadow-md">
        {/* top */}
        <div className="flex justify-between items-center px-5 py-2">
          {/* left side */}
          <div className="flex space-x-4">
            <img src={photo} width={50} />
            <div>
              {/* name */}
              <p className="text-lg font-bold font-Poppins text-gray-600">
                Alex
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
          <div className="px-5 pt-5 pb-2 text-sm font-Lora">
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
        <div className="flex justify-between items-center mx-10 my-4">
          {/* like */}
          <div>
            <SlLike size={25} />
          </div>

          {/* comment */}
          <div>
            <FaRegComment size={25} />
          </div>

          {/* rating */}
          <div>
            <MdStarRate size={25} />
          </div>
        </div>
      </div>

      {/* hello */}
      <div className="border-2 rounded-lg shadow-md">
        {/* top */}
        <div className="flex justify-between items-center px-5 py-2">
          {/* left side */}
          <div className="flex space-x-4">
            <img src={photo} width={50} />
            <div>
              {/* name */}
              <p className="text-lg font-bold">Alex</p>
              {/* locations */}
              <p className="text-sm text-gray-500 font-semibold">USA</p>
            </div>
          </div>

          {/* right side: time */}
          <div>
            <p>2 min ago</p>
          </div>
        </div>

        {/* middle: paragraph */}
        <div>
          <div className="px-5 pt-5 pb-2">
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
        <div className="flex justify-between items-center mx-10 my-4">
          {/* like */}
          <div>
            <SlLike size={30} />
          </div>

          {/* comment */}
          <div>
            <FaRegComment size={30} />
          </div>

          {/* rating */}
          <div>
            <MdStarRate size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
