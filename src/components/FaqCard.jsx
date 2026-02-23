const FaqCard = ({ question, answer }) => {
  return (
    <div
      tabIndex={0}
      className="
        group
        relative
        h-70
        cursor-pointer
        overflow-hidden
        rounded-tl-lg rounded-br-lg
        bg-gray-100
        p-6
        text-center
        shadow-lg
        transition
        outline-none
        hover:bg-gray-700
        focus:bg-gray-700
      "
    >
      {/* QUESTION */}
      <div
        className="
          flex
          h-full
          flex-col
          items-center
          justify-center
          transition-all
          duration-300
          group-hover:opacity-0
          group-focus:opacity-0
        "
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#e2ec55] text-[#e2ec55]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>

        <p className="text-2xl font-medium text-gray-800">{question}</p>
      </div>

      {/* ANSWER */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          px-6
          text-lg
          leading-relaxed
          text-gray-200
          bg-gray-700
          opacity-0
          translate-y-6
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-y-0
          group-focus:opacity-100
          group-focus:translate-y-0
        "
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
