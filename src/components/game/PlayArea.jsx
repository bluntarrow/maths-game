import {Icon} from "@mdi/react";

const PlayArea = ({ num1, num2, evaluate, setInp, symbol, inp, ansState }) => {
  return (
    <div
      className={`border col-span-5 md:col-span-3 p-4 rounded shadow-sm flex flex-col justify-center items-center relative transition ease-in-out ${
        ansState == "correct" ? "border-green-400" : ""
      } ${ansState == "wrong" ? "border-red-400" : ""}`}
    >
      <p className="text-5xl text-gray-600 font-medium flex gap-2 items-end">
        {num1} <Icon path={symbol} className="h-8 w-8" /> {num2}
      </p>
      <form
        className="flex"
        onSubmit={(e) => {
          evaluate(e);
        }}
      >
        <input
          className="text-xl border-b w-full outline-none pt-4 text-gray-700 font-normal"
          type="number"
          onChange={(e) => setInp(e.target.value)}
          value={inp}
          autoFocus
        />
      </form>
    </div>
  );
};

export default PlayArea;
