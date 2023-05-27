import StarIcon from "@/assets/icons/StarIcon";
import TitleSeparator from "./TitleSeparator";

function About() {
  return (
    <main className="flex items-center w-full flex-col gap-16 mb-16" id="about">
      <TitleSeparator
        icon={<StarIcon className="w-6 h-6 md:w-8 md:h-8" />}
        className="from-[#DCFFDD] to-[#4AF65B]"
      >
        Sobre mi
      </TitleSeparator>
      <div className="flex flex-col w-3/4 lg:w-2/3 xl:w-1/2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#C7CCD7] font-medium ">
          Nací en Colombia y tengo una titulación en Ingeniería de Sistemas,
          complementada con un postgrado en Power BI y Análisis de Información.
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#C7CCD7] font-medium ">
          Actualmente trabajo en Afordin, y en mi tiempo libre me dedico a
          responder las dudas de Comuafor y poner enlaces a recursos guapos
          (como yo ).
        </p>
      </div>
    </main>
  );
}

export default About;

// from-[#DCFFDD] to-[#4AF65B] <StarIcon className="w-6 h-6 md:w-8 md:h-8" />
