const Score = ({ score, className }) => {
  return (
    <div
      className={
        "text-7xl flex flex-col p-4 rounded shadow-sm items-center justify-center text-gray-600 font-medium md:col-span-2 col-span-5 border " +
        className
      }
    >
      <div className="text-xl uppercase text-gray-400">score</div>
      <div>{score}</div>
    </div>
  );
};

export default Score;
