const Card = ({ badge, title, subtitle, text, bg, txColor, onClick }) => {
  return (
    <div
      className={`rounded-xl p-10 text-center shadow-md ${bg} ${txColor} flex flex-col cursor-pointer justify-between items-center`}
      onClick={onClick}
    >
      <span className="inline-block rounded bg-black/20 px-3 py-1 text-xs w-fit">
        {badge}
      </span>

      <h2 className="mt-4 text-2xl font-bold">{title}</h2>

      <p className="mt-1">{subtitle}</p>

      <p className="mt-4 text-sm opacity-90">{text}</p>

      <button
        onClick={onClick}
        className="
          mt-6
          w-full
          rounded
          bg-[#e2ec55]
          py-3
          font-semibold
          text-gray-800
          transition
          hover:opacity-90
          cursor-pointer
        "
      >
        Participar
      </button>
    </div>
  );
};

export default Card;
