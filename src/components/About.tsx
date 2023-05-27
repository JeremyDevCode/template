import StarIcon from "@/assets/icons/StarIcon";
import TitleSeparator from "./TitleSeparator";

function About() {
  return (
    <main className="flex items-center w-full flex-col gap-16 mb-16" id="about">
      <TitleSeparator
        icon={<StarIcon className="w-6 h-6 md:w-8 md:h-8" />}
        className="from-[#DCFFDD] to-[#4AF65B]"
      >
        Sobre mí
      </TitleSeparator>
      <div className="flex flex-col w-3/4 lg:w-2/3 xl:w-1/2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <p className="text-lg lg:text-2xl text-[#C7CCD7] font-medium !leading-[158%] ">
          Después de obtener mi título en Ingeniería de Sistemas, comencé mi carrera como desarrollador y posteriormente
          complementé mis estudios con un posgrado en análisis. He colaborado en grandes comunidades de programación. 
        </p>
        <p className="text-lg lg:text-2xl text-[#C7CCD7] font-medium !leading-[158%]">
          La pasión por ayudar a otros me ha llevado a familiarizarme con muchas tecnologías, trabajar con muchos
          perfiles distintos, entender código ajeno y desarrollar la capacidad de gestionar proyectos.
        </p>
      </div>
    </main>
  );
}

export default About;
