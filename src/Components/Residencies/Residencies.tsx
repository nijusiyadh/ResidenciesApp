import "swiper/css";
import Slider from "../../Components/Residencies/Slider";

const Residencies = () => {
  return (
    <section id="Residencies">
      <div className="max-w-[1280px] overflow-hidden mx-auto flex flex-col p-[1.5rem] ">
        <div className="flex flex-col items-start">
          <span className="text-orange-400 font-[600] text-[1.5rem]">
            Best Choices
          </span>
          <span className="font-bold  text-[2rem] text-black/80">
            Popular Residencies
          </span>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Residencies;
