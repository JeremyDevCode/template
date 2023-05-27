import CurriculumIcon from "@/assets/icons/CurriculumIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import Paragraph from "@/common/Paragraph";
import LinkButton from '@/common/LinkButton';
import curriculum from '@/assets/files/curriculum.pdf'


const Header = () => {
  return (
    <header className="flex items-center h-full w-full flex-col gap-12 md:gap-16 text-[#141414] dark:text-white">
      <h1 className="font-bold mt-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center md:pb-4 lg:pb-8" style={{'--stagger':1} as React.CSSProperties} data-animate>
        <span className="text-transparent bg-clip-text [background-image:linear-gradient(180deg,_#6CEF79_7.35%,#1DD7F0_93.27%,#1DD7F0_93.28%)]">
          From pixels
        </span>
        <br />
        <span className="text-transparent bg-clip-text [background-image:linear-gradient(180deg,_#6CEF79_7.35%,#1DD7F0_93.27%,#1DD7F0_93.28%)]">
          to magic
        </span>
      </h1>
      <Paragraph>
        Soy un Ingeniero de Sistemas especializado en diseño de bases de datos y
        programación SQL
      </Paragraph>
      <div className="flex justify-center gap-4 sm:gap-16">
        <LinkButton
          content="Linkedin"
          icon={<LinkedInIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
          href={import.meta.env.LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        />
        <LinkButton
          content="Curriculum"
          icon={<CurriculumIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
          href={curriculum}
          download
        />
      </div>
    </header>
  );
};

export default Header;
