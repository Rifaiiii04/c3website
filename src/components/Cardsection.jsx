export default function CardSection({ title, description, className = "" }) {
  return (
    <>
      <div className="w-52 h-48 cursor-pointer rounded-lg shadow-lg p-3 text-center flex flex-col items-center justify-center bg-white hover:shadow-blue-500 group transition-all duration-300 hover:scale-105">
        <i className={`${className} text-6xl  text-blue-600`}></i>
        <h3 className="text-md font-semibold mt-2 ">{title}</h3>
        <p className="text-xs text-gray-600 mt-2">{description}</p>
      </div>
    </>
  );
}
