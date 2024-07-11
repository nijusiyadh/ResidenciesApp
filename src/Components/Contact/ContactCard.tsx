import React from "react";
import ButtonComp from "../Button/ButtonComp";

type ContactCardProps = {
  icon: React.ElementType;
  cardText: string;
  buttonText: string;
  dis: string;
};

const ContactCard = ({ icon, cardText, buttonText, dis }: ContactCardProps) => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 bg-blue/5  transition ease-in duration-200 rounded-md hover:shadow-lg">
      <div className="flex gap-[1.5rem] items-center ">
        <div className="p-4 bg-green-100 text-green-600 rounded-md">{icon}</div>
        <div className="flex flex-col">
          <span className="text-[1.1rem] font-[600] ">{cardText}</span>
          <span className="">9{dis}</span>
        </div>
      </div>
      <div className="w-full">
        <ButtonComp style=" bg-blue/5 text-black hover:scale-105 hover:bg-blue hover:text-white w-full">
          {buttonText}
        </ButtonComp>
      </div>
    </div>
  );
};

export default ContactCard;
