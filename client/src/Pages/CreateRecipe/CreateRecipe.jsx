import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DropzoneUploader from "react-dropzone-uploader";
import { Button } from "flowbite-react";
import FooterComp from "../../component/Footer/Footer";
import NavBar from "../../component/NavBar/NavBar";

const CreateRecipe = ({ isFixed }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <NavBar isFixed={isFixed} />
      <div className="flex justify-center align-center p-4 mb-10 mt-10">
        <div className="border-2 border-white-200 shadow-xl p-6 w-3/5 rounded-lg space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-500 tracking-wide">
              Create <span className="text-red-500">Recipe</span>
            </h1>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Recipe title
            </h3>
            <input className="border-2 w-full h-8" />
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
                  className="block border-2  w-2/6 h-8"
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
                        className="border-2 h-8"
                        placeholder="Nutrient type"
                      />
                    </div>
                    <div>
                      <h1 className="text-md font-semibold text-gray-400 tracking-wide">
                        cal
                      </h1>
                      <input className="border-2 h-8" placeholder="cal" />
                    </div>
                  </div>
                  <button></button>
                  <Button className="bg-red-500 px-2">Add nut</Button>
                </form>
              </div>
            </div>
            <div className="mx-60">
              <Button className="bg-blue-500">Add Ingrdient</Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Steps
            </h3>
            <input className="border-2  w-full h-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-400 tracking-wide">
              Image
            </h3>
            <div className="border-2 border-gray-400 p-2">
              <DropzoneUploader
                classNames={`text-md text-gray-400 font-bold`}
                accept="image/*,video/*"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-green-500 hover:bg-green-600" outline>
              Submit
            </Button>
            <Button color="failure">Cancel</Button>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default CreateRecipe;
