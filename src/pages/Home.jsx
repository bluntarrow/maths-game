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
      <div className="h-full max-w-5xl mx-auto grid grid-cols-2 grid-rows-2 gap-10 py-20">
        {games.map(({ name, icon }) => (
          <Link
            key={name}
            to={"/games/" + name}
            className="bg-gray-50 text-gray-700 rounded-md shadow flex flex-col justify-center items-center"
          >
            <Icon path={icon} className="w-20 h-20" />
            <h2 className="capitalize font-medium">{name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
