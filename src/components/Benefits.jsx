import CardSection from "./Cardsection";
export default function Benefits() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center mt-10 px-10">
        <h2 className="text-md md:text-2xl font-semibold text-white">
          Let's Build Your Project Together
        </h2>
        <div className="w-full h-full gap-10 flex flex-col md:flex-row items-center justify-center mt-5 p-3">
          <CardSection
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat corporis provident ex magnam."
          />
          <CardSection
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat corporis provident ex magnam."
          />
          <CardSection
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat corporis provident ex magnam."
          />
          <CardSection
            className="ri-chat-1-line"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat corporis provident ex magnam."
          />
        </div>
      </div>
    </>
  );
}
