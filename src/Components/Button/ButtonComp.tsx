import ButtonType from "./type";

const ButtonComp = ({ style, children }: ButtonType) => {
  return (
    <button
      className={`transition ease-in duration-150 rounded-md px-6 text-white font-[500] py-2 ${style}`}
    >
      {children}
    </button>
  );
};

export default ButtonComp;
