import { Link } from "react-router";

const ProgramaCard = ({ title, description, slug }) => {
  return (
    <article
      className="
        rounded-xl
        bg-white
        p-6
        shadow-md
        transition
        hover:shadow-xl
        h-80
      "
    >
      <div className="mb-4 flex h-20 items-center justify-center rounded-lg bg-gray-100 text-5xl transition group-hover:bg-[#e2ec55]/20"></div>
      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold text-dark">{title}</h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      {/* CTA */}
      <Link
        to={`/programas/${slug}`}
        className="
          inline-block
          rounded-lg
          border
          border-[#e2ec55]
          px-4
          py-2
          text-sm
          font-semibold
          text-dark
          transition
          hover:bg-[#e2ec55]
        "
      >
        Ver programa
      </Link>
    </article>
  );
};

export default ProgramaCard;
