import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../Data/ResiData.json";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  const swiper = useSwiper();
  return (
    <div className="relative">
      <Swiper className="overflow-visible" slidesPerView={3}>
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="flex max-w-[16rem] overflow-hidden rounded-[20px] hover:bg-blue/10 hover:shadow-lg hover:cursor-pointer hover:scale-105 transition ease-in mx-2 duration-300 flex-col  gap-[0.6rem] p-4">
              <img src={card.image} alt="home" className="rounded-xl w-full " />
              <span className="text-[1.2rem[ font-[600]">
                <span className="text-orange-500">
                  $ <span>{card.price}</span>{" "}
                </span>
              </span>
              <span className="text-[1.5rem]">{card.name}</span>
              <span className="text-[0.7rem] w-[15rem]">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-20 top-[-4rem] ">
        <button
          className="text-2xl text-blue rounded-full w-12 h-12 hover:bg-gray-100 transition ease-in duration-200"
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
        <button
          className="text-2xl text-blue rounded-full w-12 ml-3 h-12 hover:bg-gray-100 transition ease-in duration-200"
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
