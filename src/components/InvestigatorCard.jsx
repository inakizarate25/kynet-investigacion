// import profileImg from "../assets/prof.jpg";

// const InvestigatorCard = ({ investigator }) => {
//   const {
//     firstName,
//     lastName,
//     title,
//     role,
//     specialty,
//     description,
//     image,
//     mn,
//   } = investigator;

//   return (
//     <article
//       className="
//       group
//       relative
//       rounded-xl
//       bg-white
//       p-6
//       text-gray-800
//       shadow-lg
//       transition
//       hover:shadow-2xl
//       cursor-pointer
//     "
//     >
//       {/* Accent bar */}
//       <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#e2ec55]" />

//       {/* Header */}
//       <div className="mb-4 flex items-center gap-4">
//         <img
//           src={image || profileImg}
//           alt={`${firstName} ${lastName}`}
//           className="
//             h-35 w-30
//             rounded-md
//             bg-white
//             object-cover
//           "
//         />

//         <div>
//           <h3 className="text-xl font-semibold leading-tight">
//             {firstName} {lastName}
//           </h3>
//           <p className="text-sm ">{title}</p>
//           <p className="text-xs text-gray-500">{mn}</p>
//         </div>
//       </div>

//       {/* Role */}
//       <div className="mb-3">
//         <span
//           className="
//           inline-block
//           rounded-full
//           bg-[#e2ec55]
//           px-3
//           py-1
//           text-md
//           font-semibold
//           text-gray-900
//         "
//         >
//           {role}
//         </span>
//       </div>

//       {/* Specialty */}
//       <p className="mb-3 text-md">{specialty}</p>

//       {/* Description */}
//       <p className="text-sm leading-relaxed">{description}</p>
//     </article>
//   );
// };

// export default InvestigatorCard;
import profileImg from "../assets/prof.jpg";

const InvestigatorCard = ({ investigator }) => {
  const {
    firstName,
    lastName,
    title,
    role,
    specialty,
    description,
    image,
    mn,
  } = investigator;

  return (
    <article
      className="
      group relative flex flex-col h-full
      bg-white border border-slate-200 rounded-lg
      p-8 transition-all duration-300
      hover:border-slate-300 hover:shadow-sm
    "
    >
      {/* Indicador de Línea de Investigación (Top-left) */}
      <div className="absolute top-0 left-0 w-12 h-[3px] bg-[#e2ec55] transition-all duration-500 group-hover:w-full" />

      <div className="flex flex-col gap-6">
        <div className="flex gap-6 items-start">
          {/* <div className="relative shrink-0">
            <img
              src={image || profileImg}
              alt={`${firstName} ${lastName}`}
              className="h-32 w-28 object-cover rounded-sm  group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="mt-2 text-[10px] font-mono text-slate-400 tracking-tighter uppercase">
              {mn}
            </div>
          </div> */}

          <div className="flex flex-col justify-start pt-1">
            <span className="text-[#e2ec55] bg-black text-[9px] font-bold px-2 py-0.5 rounded-full w-fit mb-2 tracking-widest uppercase">
              {role}
            </span>
            <h3 className="text-2xl font-light text-slate-900 leading-tight tracking-tight">
              {firstName} <span className="font-bold">{lastName}</span>
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-1 italic">
              {title}
            </p>
            <p className="text-sm font-medium text-slate-500 mt-1 italic">
              {mn}
            </p>
          </div>
        </div>

        {/* Especialidad: Diseño minimalista */}
        <div className="pl-4 py-1">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-[0.2em]">
            {specialty}
          </h4>
        </div>

        {/* Abstract / Descripción */}
        <div className="relative">
          <p className="text-sm text-slate-600 leading-relaxed font-light text-justify">
            <span className="text-slate-900 font-semibold text-lg leading-none"></span>
            {description}
            <span className="text-slate-900 font-semibold text-lg leading-none"></span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default InvestigatorCard;
