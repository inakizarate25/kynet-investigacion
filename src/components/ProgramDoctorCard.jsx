import profileImg from "./../assets/prof.jpg";
const ProgramDoctorCard = ({ doctor }) => {
  const { firstName, lastName, title, role, institution, image } = doctor;

  return (
    <div className="flex items-center gap-4 rounded-lg border p-4 w-64">
      <img
        src={image || profileImg}
        alt={`${firstName} ${lastName}`}
        className="h-30 w-20 rounded-sm object-cover"
      />

      <div>
        <p className="font-semibold text-dark">
          {firstName} {lastName}
        </p>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-xs text-gray-400">{institution}</p>
      </div>
    </div>
  );
};

export default ProgramDoctorCard;
