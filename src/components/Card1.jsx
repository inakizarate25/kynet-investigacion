const Card1 = ({ titulo, info, color, textColor }) => {
  return (
    <div
      className={`p-6 shadow-lg ${color} w-[320px] m-4 rounded-tl-lg rounded-br-lg`}
    >
      <h2 className={`text-3xl font-semibold mb-2 ${textColor}`}>{titulo}</h2>
      <p className={textColor}>{info}</p>
    </div>
  );
};
export default Card1;
