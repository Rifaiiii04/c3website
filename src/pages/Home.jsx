import HeroSection from "../assets/images/herosection.png";

import CardSection from "../components/Cardsection";
import Section from "../components/Section";
import Benefits from "../components/Benefits";
export default function Home() {
  return (
    <>
      <section className="w-full h-auto overflow-x-hidden">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-[300px] md:h-[590px] rounded-b-4xl bg-gradient-to-t from-blue-800 to-blue-800/80"></div>
          <img
            src={HeroSection}
            alt=""
            className="w-full h-[300px] md:h-[590px] object-cover rounded-b-4xl"
            style={{ maxWidth: "100vw" }}
          />
        </div>
        <div className="absolute md:top-64 top-40 w-11/12 max-w-md md:w-[560px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-2">
          <h1 className="md:text-4xl text-xl">
            We provide the best <span className="font-semibold">Solution</span>
          </h1>
          <h2 className="md:text-xl text-md">
            to build your{" "}
            <span className="font-semibold">website or application system</span>
          </h2>
          <p className="text-xs mt-2 font-extralight text-white/80">
            C3 is a creative digital service provider ready to help you develop
            custom web & mobile-based systems for your business.
          </p>
          <a
            href="#discover"
            className="py-1 px-3 mt-2 relative top-5 hover:bg-white/90 active:bg-white/70 transition-all duration-300 rounded-lg bg-white text-slate-800"
          >
            Discover More
          </a>
        </div>

        {/* cardd */}
        <div className="w-full h-full md:h-52 md:flex-row flex-col  relative md:-top-14 -top-10 flex items-center justify-center gap-5 md:gap-10">
          <CardSection
            title="Web Development"
            description="We create responsive and user-friendly websites tailored to your
          business needs."
            className="ri-window-2-fill"
          />
          <CardSection
            title="Mobile Development"
            description="Our team builds intuitive mobile applications for both iOS and Android
          platforms."
            className="ri-smartphone-line"
          />
          <CardSection
            title="lorem Ipsum"
            description="Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Doloribus"
            className="ri-settings-3-line"
          />
        </div>
      </section>

      <Section />
      <section className="w-96 md:w-full h-full pb-10 bg-blue-800 md:static md:bottom-0 relative bottom-28 flex items-center justify-center mb-5">
        <Benefits />
      </section>
    </>
  );
}
