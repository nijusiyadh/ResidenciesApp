import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Hero() {
  return (
    <section className=" text-white">
      <div className="flex items-center flex-col gap-10 justify-between max-w-[1280px] mx-auto  p-6 laptop:flex-row ">
        {/** left section */}
        <LeftSection />

        {/** right section */}

        <RightSection ImgUrl="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
    </section>
  );
}

export default Hero;
