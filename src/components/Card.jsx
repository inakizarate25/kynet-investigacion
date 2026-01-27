const Card = ({ badge, title, subtitle, text, bg, buttonText, txColor }) => {
  return (
    <div className={`rounded-xl p-10 text-center ${bg} ${txColor}`}>
      <span className="inline-block rounded bg-black/20 px-3 py-1 text-xs">
        {badge}
      </span>

      <h2 className="mt-4 text-2xl font-bold ">{title}</h2>

      <p className="mt-1 ">{subtitle}</p>

      <p className="mt-4 text-sm ">{text}</p>

      <button className="mt-6 w-full rounded bg-[#e2ec55] py-3 font-semibold cursor-pointer text-gray-700">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
