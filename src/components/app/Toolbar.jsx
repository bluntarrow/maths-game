import { Link } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";

const Toolbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white">
      <div className="max-w-5xl mx-auto w-full py-4 text-gray-700 font-medium flex justify-between">
        <Link to={"/"}>Maths</Link>
        <div className="flex gap-4 text-gray-500">
          <div>00:00</div>

          <Cog6ToothIcon className="h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
