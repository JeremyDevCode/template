import Button from "@/common/Button";
import CurriculumIcon from "@/assets/icons/CurriculumIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Paragraph from "@/common/Paragraph";

const Header = () => {
  return (
    <header className="flex items-center h-full w-full flex-col gap-16 text-[#141414] dark:text-white">
      <h1 className="font-bold text-9xl leading-[160px]  text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6CEF79] to-[#1DD7F0]">
          From pixels
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6CEF79] to-[#1DD7F0] pb-4">
          to magic
        </span>
      </h1>
      <Paragraph>
        Soy un Ingeniero de Sistemas especializado en diseño de bases de datos y
        programación SQL
      </Paragraph>
      <div className="flex justify-center gap-16">
        <Button
          content="Linkedin"
          icon={<LinkedInIcon width={24} height={25} />}
        />
        <Button
          content="Curriculum"
          icon={<CurriculumIcon width={24} height={25} />}
        />
      </div>
    </header>
  );
};

export default Header;
