import logo from "../../assets/logo.png";
import ButtonComp from "../Button/ButtonComp";

type NavTypes = {
  id: number;
  text: string;
};

const NavData: NavTypes[] = [
  {
    id: 1,
    text: "Residencies",
  },
  {
    id: 2,
    text: "Our Values",
  },
  {
    id: 3,
    text: "Contact Us",
  },
  {
    id: 4,
    text: "Get Started",
  },
];

const Header = () => {
  return (
    <section className=" ">
      <div className="flex text-secondary items-center justify-between p-6  max-w-[1280px] w-full mx-auto">
        <img src={logo} alt="" width={40} />

        <div className=" flex items-center gap-[2rem] hover:cursor-pointer  max-tablet:hidden  ">
          {NavData.map((nav) => (
            <a key={nav.id} href={`#${nav.text}`} className="hover:text-white">
              {nav.text}
            </a>
          ))}
          <ButtonComp style="bg-blue flex item-center justify-center hover:cursor-pointor hover:scale-105 ">
            <a href="#">Contact</a>
          </ButtonComp>
        </div>
      </div>
    </section>
  );
};

export default Header;
