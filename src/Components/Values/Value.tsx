import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { MdOutlineArrowDropDown } from "react-icons/md";

import data from "./accordian";
import RightSection from "../Hero/RightSection";

const Value = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto flex flex-col laptop:flex-row items-center  p-6  ">
        {/** left side */}
        <div className="flex flex-1">
          <RightSection ImgUrl="https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        {/** right section */}

        <div className="flex flex-col flex-1 gap-[0.4rem]">
          <span className="text-[1.5rem] font-[600] text-orange-500">
            Our Value
          </span>
          <span className="text-[2rem] font-bold">Value we Give to You</span>
          <span className="font-[300] text-[1rem] italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
            Corrupti maiores rerum iusto numquam. Quasi nam alias <br />{" "}
            repudiandae dicta veritatis earum.
          </span>

          {/** accirduan */}

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="mt-[2rem] border-o "
          >
            {data.map((item, i) => (
              <AccordionItem
                key={i}
                className="bg-white border-[1px] hover:shadow-md border-black/5 rounded-xl overflow-hidden mb-[20px]"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between bg-white p-[1rem] cursor-pointer">
                    <div className="p-[10px] bg-gray-100 rounded-sm text-indigo-400">
                      {item.icon}
                    </div>
                    <span className="text-[1.1rem]">{item.heading}</span>
                    <div>
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="text-[0.9rem] font-[300]">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
