import StarIcon from "@/assets/icons/StarIcon";
import Decorator from "@/common/Decorator";
import Paragraph from "@/common/Paragraph";

function About() {
  return (
    <main className="flex items-center w-full flex-col gap-16" id="about">
      <div className="flex items-center gap-16">
        <Decorator icon={<StarIcon />} />
        <h2 className="font-bold text-[64px] text-transparent bg-clip-text leading-[81.92px] bg-gradient-to-b from-[#DCFFDD] to-[#4AF65B] pb-4 w-max">
          Sobre mi
        </h2>
        <Decorator icon={<StarIcon />} />
      </div>
      <div className="flex flex-col items-center gap-12">
        <p className="text-2xl text-[#C7CCD7] font-medium leading-[38.21px] w-[45%]">
          Nací en Colombia y tengo una titulación en Ingeniería de Sistemas,
          complementada con un postgrado en Power BI y Análisis de Información.
        </p>
        <p className="text-2xl text-[#C7CCD7] font-medium leading-[38.21px] w-[45%]">
          Actualmente trabajo en Afordin, y en mi tiempo libre me dedico a
          responder las dudas de Comuafor y poner enlaces a recursos guapos
          (como yo ).
        </p>
      </div>
    </main>
  );
}

export default About;
