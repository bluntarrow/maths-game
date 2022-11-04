import Icon from "@mdi/react";
import { mdiMinus, mdiPlus, mdiDivision, mdiClose } from "@mdi/js";
import { Link } from "react-router-dom";

const Home = () => {
  const games = [
    { name: "addition", icon: mdiPlus, symbol: "+" },
    { name: "subtraction", icon: mdiMinus, symbol: "-" },
    { name: "multiplication", icon: mdiClose, symbol: "*" },
    { name: "division", icon: mdiDivision, symbol: "/" },
  ];
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-5 gap-10 h-full max-w-5xl mx-auto py-20">
        <div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-10">
          {games.map(({ name, icon }) => (
            <Link
              key={name}
              to={"/games/" + name}
              className="bg-white border text-gray-700 rounded-md shadow-sm flex flex-col justify-center items-center"
            >
              <Icon path={icon} className="w-20 h-20" />
              <h2 className="capitalize font-medium">{name}</h2>
            </Link>
          ))}
        </div>
        <div className="col-span-2 rounded shadow-sm bg-white border">
          <h1 className="py-10 text-xl font-medium text-center text-gray-600">
            High Scores
          </h1>
          <ul className="p-4">
            <li className="text-center font-medium text-gray-500 rounded">
              No high scores yet
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
