// components/Section.jsx
import Discuss from "../assets/images/discuss.png";

export default function Section() {
  return (
    <>
      <section
        id="discover"
        className="w-full max-w-6xl mx-auto h-full flex flex-col md:flex-row p-5 mt-20 gap-10 md:gap-5"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1">
          <img src={Discuss} alt="Team discussion" className="w-full max-w-md" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
          <h2 className="font-semibold text-2xl md:text-3xl text-slate-900">
            Let's Discuss about your Project
          </h2>
          <p className="mt-4 text-gray-600">
            Our team of experts is ready to collaborate with you to bring your ideas to life. 
            We'll work closely with you to understand your vision and create a tailored solution 
            that meets your business objectives.
          </p>
        </div>
      </section>
      
      <div className="w-full max-w-4xl border-b-2 mx-auto border-black/20 my-16"></div>
      
      <section className="w-full max-w-6xl mx-auto h-full flex flex-col md:flex-row p-5 gap-10 md:gap-5">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="font-semibold text-2xl md:text-3xl text-slate-900">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="mt-4 text-gray-600">
            We leverage the latest technologies to build scalable and efficient systems. 
            From modern frontend frameworks to robust backend architectures, we ensure 
            your digital product is built to last and perform.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={Discuss} alt="Technology" className="w-full max-w-md" />
        </div>
      </section>
    </>
  );
}