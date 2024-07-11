import ButtonComp from "../Button/ButtonComp";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[95%] bg-white rounded-[5px] border-white/5 py-2 px-4 ">
      <HiLocationMarker className="text-blue" />
      <input
        type="text"
        className="focus:outline-0 w-[70%]  active:outline-0 text-black/50 px-2 "
        placeholder="Welcome..."
      />
      <ButtonComp style="bg-blue font-bold">Search</ButtonComp>
    </div>
  );
};

export default SearchBar;
