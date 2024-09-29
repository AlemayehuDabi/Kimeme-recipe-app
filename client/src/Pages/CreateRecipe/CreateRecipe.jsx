import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone-uploader";
import { Button } from "flowbite-react";
import FooterComp from "../../component/Footer/Footer";
import NavBar from "../../component/NavBar/NavBar";
import "react-dropzone-uploader/dist/styles.css";

const CreateRecipe = ({ isFixed }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <NavBar isFixed={isFixed} />
      <div className="flex justify-center align-center px-2 sm:p-4 mb-10 mt-10">
        <div className="border-2 border-gray-200 dark:border-gray-600 shadow-xl p-6 w-full md:w-3/4  lg:w-3/5 rounded-xl md:rounded-lg space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-500 tracking-wide">
              Create <span className="text-red-500">Recipe</span>
            </h1>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Recipe title
            </h3>
            <input
              className="border-2 py-3 px-1 border-gray-400 w-full h-8"
              placeholder="Recipe title"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Description
            </h3>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-lg font-semibold text-gray-400 tracking-wide">
                  Ingrdient
                </h1>
                <input
                  className="block border-2 py-3 px-1 w-2/6 h-8 border-gray-400"
                  placeholder="Ingrdient title"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-400 tracking-wide mb-2">
                  Nutrient
                </h3>
                <form action="" className="space-y-5">
                  <div className="space-x-3 flex">
                    <div>
                      <h1 className="text-md font-semibold text-gray-400 tracking-wide">
                        Nut type
                      </h1>
                      <input
                        className="border-2 h-8 py-3 px-1 border-gray-400"
                        placeholder="Nutrient type"
                      />
                    </div>
                    <div>
                      <h1 className="text-md font-semibold text-gray-400 tracking-wide">
                        cal
                      </h1>
                      <input
                        className="border-2 h-8 py-3 px-1 border-gray-400"
                        placeholder="cal"
                      />
                    </div>
                  </div>
                  <button
                    className="font-semibold bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white active:bg-red-700"
                    outline
                  >
                    Add nut
                  </button>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="font-semibold bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white active:bg-green-800"
                outline
              >
                Add Ingrident
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Steps
            </h3>
            <input
              className="border-2 border-gray-400 py-3 px-1 w-full h-8"
              placeholder="Steps"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Image
            </h3>
            <div className="border-2 border-gray-400 p-2">
              <Dropzone accept="image/*,video/*" />
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              className="font-semibold bg-white border-2 border-green-600 text-black active:bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg hover:text-white"
              outline
            >
              Submit
            </button>
            <button
              className="font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white active:bg-red-800"
              outline
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default CreateRecipe;
