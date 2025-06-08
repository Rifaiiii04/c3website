function Card({ className = "", title, description }) {
  return (
    <>
      <div className="bg-white w-32 h-48 rounded-lg shadow-lg p-3 text-center hover:scale-110 transition-all duration-500">
        <i className={`${className} text-blue-800 text-4xl`}></i>
        <h1 className="text-md font-bold mt-2">{title}</h1>
        <p className="text-xs font-extralight mt-2">{description}</p>
      </div>
    </>
  );
}

export default function Benefits() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center mt-10 px-5">
        <h2 className="text-md md:text-2xl font-semibold text-white">
          Let's Build Your Project Together
        </h2>
        <div className="w-full h-full gap-10 flex flex-wrap md:flex-row items-center justify-center mt-5 p-3">
          <Card
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <Card
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <Card
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <Card
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </>
  );
}
