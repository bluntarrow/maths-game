const Score = ({score}) => {
    return (         <div className="text-7xl flex flex-col p-4 rounded shadow-sm items-center justify-center text-gray-600 font-medium col-span-2 border">
    <div className="text-xl uppercase text-gray-400">score</div>
    <div>{score}</div>
  </div> );
}
 
export default Score;