import { Link } from "react-router";

const ProgramaCard = ({ title, description, slug, image }) => {
  return (
    <article
      className="
        rounded-xl
        bg-white
        p-6
        shadow-md
        transition
        hover:shadow-xl
        h-100
        flex
        flex-col
        justify-between
        group
      "
    >
      <img src={image} alt={title} className="h-50 w-full object-cover" />

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
          w-32
        "
      >
        Ver programa
      </Link>
    </article>
  );
};

export default ProgramaCard;
