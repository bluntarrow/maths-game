import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const Splash = ({started}) => {
  const [count, setCount] = useState(3);
  let counter = 3;

  const setCounter = () => {
    if (counter > 0) {
      counter--;
      setCount(counter);
    }
  };

  useEffect(() => {
    const Myinterval = setInterval(() => {
      if (counter > 0) {
        counter--;
        setCount(counter);
      } else {
        clearInterval(Myinterval);
      }
    }, 1000);
  }, []);

  return (
    <Transition
      show={!started}
      enter="transition-opacity ease-in"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed h-screen w-screen bg-gray-900/50 top-0 left-0 z-20 flex flex-col justify-center items-center font-medium gap-4">
        <div className="text-gray-50 text-xl">Starts in...</div>
        <div className="text-gray-100 text-7xl animate-pulse">{count}</div>
      </div>
    </Transition>
  );
};

export default Splash;
