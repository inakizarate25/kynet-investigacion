import profileImg from "../assets/prof.jpg";

const ProgramDoctorCard = ({ doctor }) => {
  const { firstName, lastName, role, image, mt } = doctor;

  return (
    <div
      className="
      relative flex flex-col sm:flex-row items-center 
      border border-gray-200 bg-white 
      rounded-br-3xl transition-all
      min-h-[10rem] sm:h-40
      ml-10 sm:ml-8 mt-4 sm:mt-0 /* Espacio para la imagen absoluta en móviles */
      pl-12 sm:pl-14 pr-5 py-6 sm:py-4
    "
    >
      {/* IMAGE */}
      <img
        src={image || profileImg}
        alt={`${firstName} ${lastName}`}
        className="
          absolute 
          -left-10 sm:-left-8 
           top-0 
          - sm:translate-y-0
          h-24 w-18 sm:h-30 sm:w-20 
          object-cover shadow-md sm:shadow-none
         
        "
      />

      {/* INFO */}
      <div className="flex flex-col justify-center sm:justify-around h-full w-full ml-4 text-left">
        <p className="font-semibold text-gray-800 leading-tight text-lg sm:text-xl mb-1 sm:mb-0">
          {firstName} {lastName}
        </p>

        <p className="text-sm text-gray-500 mb-2 sm:mb-0">{role}</p>

        <p className="text-xs text-gray-400 mt-auto sm:mt-0 font-medium">
          MN - {mt}
        </p>
      </div>
    </div>
  );
};

export default ProgramDoctorCard;
