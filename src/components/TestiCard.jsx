export default function TestiCard({ name, comment, img, rating, date }) {
  return (
    <div className="w-52 h-48 bg-slate-100 shadow-xl rounded-lg p-3 flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <img src={img} alt={name} className="w-10 h-10 rounded-full mb-2 sha" />
        <h3 className="text-md font-semibold">{name}</h3>
      </div>
      <div>
        <p className="text-xs">"{comment}"</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex gap-0.5 min-w-[70px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <i
              key={i}
              className={
                i < rating
                  ? "ri-star-fill text-yellow-500"
                  : "ri-star-line text-gray-400"
              }
            ></i>
          ))}
        </div>
        <div className="text-right min-w-[80px]">
          <p className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
