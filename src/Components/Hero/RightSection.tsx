
type ImageProps = {
  ImgUrl: string
}

const RightSection = ({ImgUrl}:ImageProps) => {
  return (
    <div className="flex  items-center justify-center">
      <div className="w-[30rem] h-[35rem] max-tablet:w-[25rem] max-tablet:h-[30rem] max-mobile:w-[20rem] overflow-hidden rounded-t-[15rem] border-[8px] border-[rgba(255,255,255,0.12)] hover:scale-[1.02] cursor-pointer transition ease-in duration-200">
        <img
          src={ImgUrl}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default RightSection;
