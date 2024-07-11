import RightSection from "../Hero/RightSection";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import ContactCard from "./ContactCard";
import { MdCall, MdChat } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto p-6 flex flex-col-reverse laptop:flex-row items-center justify-between gap-8 ">
        <div className="flex flex-1 flex-col gap-[0.5rem]">
          <span className="text-[1.1rem] font-[600] text-orange-500">
            Out Contacts
          </span>
          <span className="text-[2rem] font-bold">Easy to Contact Us</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur, eveniet.
          </span>

          <div className="flex mt-3 gap-4 max-mobile:flex-col">
            <ContactCard
              cardText="Call"
              buttonText="Call Now"
              icon={<MdCall />}
              dis="983 432 222 444"
            />
            <ContactCard
              cardText="Chat"
              buttonText="Chat Now"
              icon={<BsFillChatDotsFill />}
              dis="983 432 222 444"
            />
          </div>
          <div className="flex mt-3 gap-4  max-mobile:flex-col">
            <ContactCard
              cardText="Video Call"
              buttonText="Video Call Now"
              icon={<MdChat />}
              dis="983 432 222 444"
            />
            <ContactCard
              cardText="Message"
              buttonText="Message Now"
              icon={<HiChatBubbleBottomCenter />}
              dis="983 432 222 444"
            />
          </div>
        </div>
        <div className="flex flex-1">
          <RightSection ImgUrl="https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
