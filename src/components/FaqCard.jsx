const FaqCard = ({ question, answer }) => {
  return (
    <div
      className="
        group
        relative
        h-60
        cursor-pointer
        overflow-hidden
        rounded-tl-lg rounded-br-lg
        bg-gray-100
        p-6
        text-center
        transition
        hover:bg-gray-700
        shadow-lg
      "
    >
      {/* Question */}
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
        "
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#e2ec55] text-[#e2ec55]">
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
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>

        <p className="font-medium text-dark text-2xl">{question}</p>
      </div>

      {/* Answer */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          px-6
          text-sm
          leading-relaxed
          text-gray-200
          opacity-0
          translate-y-6
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
          bg-gray-700
        "
      >
        <p className="text-gray-200 text-lg">{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
