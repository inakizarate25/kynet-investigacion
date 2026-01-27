const Highlight = ({ title, text }) => (
  <div className="flex flex-col items-center">
    <h3 className="mb-2 text-xl font-semibold text-gray-700">{title}</h3>
    <div className="mb-4 h-1 w-16 bg-[#e2ec55]" />
    <p className="text-sm text-gray-500">{text}</p>
  </div>
);

export default Highlight;
