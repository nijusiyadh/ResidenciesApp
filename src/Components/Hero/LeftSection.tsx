import Discription from "./Discription";
import SearchBar from "./SearchBar";
import Stats from "./Stats";

const LeftSection = () => {
  return (
    <div className="flex flex-col gap-[3rem] items-start">
      <Discription />

      <SearchBar />

      <Stats />
    </div>
  );
};

export default LeftSection;
