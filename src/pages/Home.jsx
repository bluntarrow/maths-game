import {Icon} from "@mdi/react";
import { mdiMinus, mdiPlus, mdiDivision, mdiClose } from "@mdi/js";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { ScoresContext } from "../context/score";

import { Popover } from "@headlessui/react";

const Home = () => {
  const games = [
    { name: "addition", icon: mdiPlus, symbol: "+" },
    { name: "subtraction", icon: mdiMinus, symbol: "-" },
    { name: "multiplication", icon: mdiClose, symbol: "*" },
    { name: "division", icon: mdiDivision, symbol: "/" },
  ];

  const [scores] = useContext(ScoresContext);

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-5 gap-4 md:gap-10 h-full max-w-5xl mx-auto py-20 px-4 lg:px-0">
        {/* games grid */}
        <div className="col-span-5 md:col-span-3 grid grid-cols-2 grid-rows-2 gap-4 md:gap-10">
          {games.map(({ name, icon }) => (
            <Link
              key={name}
              to={"/games/" + name}
              className="bg-white border text-gray-700 rounded-md shadow-sm flex flex-col justify-center items-center p-4 md:p-0"
            >
              <Icon path={icon} className="w-20 h-20" />
              <h2 className="capitalize font-medium">{name}</h2>
            </Link>
          ))}
        </div>

        {/* high scores */}
        <div className="col-span-5 md:col-span-2 rounded shadow-sm bg-white border">
          <h1 className="py-10 text-xl font-medium text-center text-gray-600">
            High Scores
          </h1>
          <ul className="p-6 grid grid-cols-2 grid-rows-2 gap-6 text-gray-600">
            {scores.map((score) => (
              <Popover
                as="li"
                key={score.name}
                className="relative w-full h-full"
              >
                <Popover.Button className="aspect-square flex flex-col justify-center items-center gap-4 rounded hover hover:bg-gray-200/25 cursor-pointer transition w-full h-full">
                  <h4 className="font-medium text-xl">
                    {score.value.length > 0 &&
                      score.value.slice().sort().reverse()[0]}
                    {score.value.length == 0 && "-"}
                  </h4>
                  <h6 className="font-medium">{score.name}</h6>
                </Popover.Button>

                <Popover.Panel className="transition fixed z-10 h-4/5 w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-auto mx-auto bg-gray-50 rounded-xl shadow-xl border">
                  <div className="p-10 relative">
                    <h2 className="text-3xl">{score.name}</h2>
                    <ul className="grid grid-cols-4 md:grid-cols-6 mt-6 gap-4 md:gap-6">
                      {score.value.length > 0 &&
                        score.value.map((scr, i) => (
                          <li key={i} className="text-lg">{scr}</li>
                        ))}
                    </ul>
                    {score.value.length == 0 && (
                      <div className="text-lg">No scores yet</div>
                    )}
                    <Popover.Button className="absolute top-5 right-5">
                      <Icon path={mdiClose} className="h-6 w-6" />
                    </Popover.Button>
                  </div>
                </Popover.Panel>
              </Popover>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
