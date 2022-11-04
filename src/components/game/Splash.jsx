import { useState } from "react";

const Splash = () => {
  const [count, setCount] = useState(3);

  let Myinterval = setInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);
  setTimeout(() => {
    clearInterval(Myinterval);
  }, 1000);

  return (
    <div className="fixed h-full w-full bg-gray-900/50 top-0 left-0 z-20 flex flex-col justify-center items-center font-medium gap-4">
      <div className="text-gray-50 text-xl">Starts in...</div>
      <div className="text-gray-100 text-7xl animate-ping">{count}</div>
    </div>
  );
};

export default Splash;
