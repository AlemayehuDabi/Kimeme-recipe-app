import { Button, Card, Rating } from "flowbite-react";
import Kitfo from "../../assest/img/Kitfo.png";

const Recipe = () => {
  return (
    <div className="flex flex-col" id="recipe">
      <div className="text-center">
        <p className="text-3xl font-bold text-gray-400 hover:text-gray-500 tracking-wider hover:cursor-pointer transition duration-700">
          Recipe
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-6 mt-10">
        <Card
          className="max-w-md mx-2 lg:max-w-sm lg:mx-0 hover:shadow-lg"
          imgSrc={Kitfo}
          imgAlt="food-img"
        >
          <div className="flex flex-col space-y-10  flex-grow">
            <div className="flex flex-col flex-grow space-y-3">
              <div>
                <h1 className="text-lg font-semibold text-red-600">Kitfo</h1>
              </div>
              <div>
                <p className="text-sm">
                  nam obcaecati cum consectetur enim. Qui, distinctio facere?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  neque tenetur illo ipsum fugiat facere inventore error sit!
                  Tempora
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
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
        <Card
          className="max-w-md mx-2 lg:max-w-sm lg:mx-0 hover:shadow-lg"
          imgSrc={Kitfo}
          imgAlt="food-img"
        >
          <div className="flex flex-col space-y-10  flex-grow">
            <div className="flex flex-col flex-grow space-y-3">
              <div>
                <h1 className="text-lg font-semibold text-red-600">Kitfo</h1>
              </div>
              <div>
                <p className="text-sm">
                  nam obcaecati cum consectetur enim. Qui, distinctio facere?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  neque tenetur illo ipsum fugiat facere inventore error sit!
                  Tempora
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  neque tenetur illo ipsum fugiat facere inventore error sit!
                  Tempora
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
  );
};

export default Recipe;
