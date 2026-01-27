import profileImg from "../assets/prof.jpg";

const InvestigatorCard = ({ investigator }) => {
  const { firstName, lastName, title, role, specialty, description, image } =
    investigator;

  return (
    <article
      className="
      group
      relative
      rounded-xl
      bg-white
      p-6
      text-gray-800
      shadow-lg
      transition
      hover:shadow-2xl
      cursor-pointer
    "
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#e2ec55]" />

      {/* Header */}
      <div className="mb-4 flex items-center gap-4">
        <img
          src={image || profileImg}
          alt={`${firstName} ${lastName}`}
          className="
            h-[140px] w-[120px]
            rounded-md        
            bg-white
            object-cover
          "
        />

        <div>
          <h3 className="text-xl font-semibold leading-tight">
            {firstName} {lastName}
          </h3>
          <p className="text-sm ">{title}</p>
        </div>
      </div>

      {/* Role */}
      <div className="mb-3">
        <span
          className="
          inline-block
          rounded-full
          bg-[#e2ec55]
          px-3
          py-1
          text-md
          font-semibold
          text-gray-900
        "
        >
          {role}
        </span>
      </div>

      {/* Specialty */}
      <p className="mb-3 text-md">{specialty}</p>

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>
    </article>
  );
};

export default InvestigatorCard;
