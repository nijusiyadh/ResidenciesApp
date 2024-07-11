import comp1 from "../../assets/comp2.png";

const Companies = () => {
  return (
    <section>
      <div className=" grid grid-cols-2  laptop:flex max-w-[1280px] mx-auto p-[1.5rem] items-center justify-around">
        <img src={comp1} alt="" className="w-[10rem] opacity-60 mx-auto" />
        <img src={comp1} alt="" className="w-[10rem] opacity-60 mx-auto" />
        <img src={comp1} alt="" className="w-[10rem] opacity-60 mx-auto" />
        <img src={comp1} alt="" className="w-[10rem] opacity-60 mx-auto" />
      </div>
    </section>
  );
};

export default Companies;
