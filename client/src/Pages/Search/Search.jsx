import React from "react";
import { Button, TextInput, Dropdown, Card, Rating } from "flowbite-react";
import Kitfo from "../../assest/img/Kitfo.png";

const Search = () => {
  return (
    <div className="w-3/4 mx-auto border-2 shadow-sm px-5 py-3 my-10 rounded-md">
      {/* title */}
      <div className="py-5">
        <h1 className="text-2xl text-center ">Search Recipe</h1>
      </div>
      <hr className="mb-5 w-5/6 mx-auto" />

      {/* input */}
      <div className="flex justify-around items-center w-full gap-10">
        <TextInput placeholder="search" className="w-5/6" />
        <Button>Search</Button>
      </div>

      {/* filter */}
      <div className="flex justify-start items-center my-5 gap-5">
        <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        <Dropdown label="Dropdown button" dismissOnClick={false} color="gray">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>

      {/* result */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-500 tracking-wide">
          Result
        </h1>

        <div>
          <Card
            className="max-w-md mx-2 lg:max-w-sm lg:mx-0 hover:shadow-lg"
            imgSrc={Kitfo}
            imgAlt="food-img"
          >
            <div className="flex flex-col flex-grow space-y-10">
              <div className="flex flex-col flex-grow space-y-3">
                <div>
                  <h1 className="text-lg font-semibold text-red-600">Kitfo</h1>
                </div>
                <div>
                  <p className="text-sm">
                    nam obcaecati cum consectetur enim. Qui, distinctio facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo neque tenetur illo ipsum fugiat facere inventore error
                    sit! Tempora
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-grow space-y-5">
                <div>
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                  </Rating>
                </div>

                <div className="flex justify-between items-center">
                  <p>hsdjksdasldlksadkjasjkj</p>
                  <Button gradientDuoTone="pinkToOrange" outline pill>
                    See more
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Search;
