import ButtonComp from "../Button/ButtonComp";

const GetStarted = () => {
  return (
    <section>
      <div className="max-w-[1280px] p-6 mx-auto text-white">
        <div className="flex items-center rounded-md border-[6px] border-[#4c6de6] p-8 gap-[1.5rem] flex-col justify-center bg-blue">
          <span className="text-[2rem] text-center font-[600]">Get Started with Homyz</span>
          <span className="text-center text-[1rem]  font-[400]">
            Subscribe and find super attractive price quotes from us,
            <br />
            Find you residencies soon
          </span>
          <ButtonComp style="  border-[2px] border-white hover:cursor-pointer hover:scale-105 hover:bg-white hover:text-blue hover:shadow-sm ">
            <a href="#">Get Started</a>
          </ButtonComp>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
