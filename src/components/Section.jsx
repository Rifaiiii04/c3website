import Discuss from "../assets/images/discuss.png";
export default function Section() {
  return (
    <>
      <section
        id="discover"
        className="w-full h-full flex md:flex-row flex-col p-5 mt-10 gap-0 md:gap-5"
      >
        <div className="w-full h-96 flex items-center justify-center">
          <img src={Discuss} alt="" className="w-96 " />
        </div>
        <div className="w-full h-96 flex flex-col items-center relative bottom-24 md:bottom-0 md:static justify-center">
          <h2 className="font-semibold text-2xl text-slate-900">
            Let's Discuss about you Project
          </h2>
          <p className="text-justify md:w-[500px] w-full mt-3 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magnam commodi voluptates maxime eius repellendus temporibus ea
            quisquam illum officia, amet dolor fuga? Voluptates aspernatur eum
            quia corporis maxime libero!
          </p>
        </div>
      </section>
      <div className="md:w-[800px] w-[300px] border-b-2 mx-auto md:static md:bottom-0 relative bottom-16 border-black/20 mb-5"></div>
      <section
        id="discover"
        className="w-full h-full flex md:flex-row md:static md:bottom-0 relative bottom-20 flex-col p-5 md:mt-10 gap-0 md:gap-5"
      >
        <div className="w-full h-96 flex flex-col  items-center  md:static justify-center">
          <h2 className="font-semibold text-2xl text-slate-900">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-justify md:w-[500px]  w-full mt-3 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magnam commodi voluptates maxime eius repellendus temporibus ea
            quisquam illum officia, amet dolor fuga? Voluptates aspernatur eum
            quia corporis maxime libero!
          </p>
        </div>
        <div className="w-full h-96 flex items-center relative bottom-24 md:bottom-0 justify-center">
          <img src={Discuss} alt="" className="w-96 bg-red-500" />
        </div>
      </section>
    </>
  );
}
