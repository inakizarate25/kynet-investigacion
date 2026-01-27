const Card1 = ({ titulo, info, color, textColor }) => {
  return (
    <div
      className={`
        w-[320px] sm:max-w-[320px]
        md:h-[280px]
        p-6 m-2
        rounded-tl-lg rounded-br-lg
        shadow-lg
        ${color}
      `}
    >
      <h2 className={`mb-2 text-2xl sm:text-3xl font-semibold ${textColor}`}>
        {titulo}
      </h2>
      <p className={`text-sm sm:text-base ${textColor}`}>{info}</p>
    </div>
  );
};

export default Card1;
