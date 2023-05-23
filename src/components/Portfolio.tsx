import EllipseIcon from "@/assets/icons/EllipseIcon";
import Decorator from "@/common/Decorator";

function Portfolio() {
  return (
    <main className="flex items-center w-full flex-col gap-16">
      <div className="flex items-center gap-16">
        <Decorator icon={<EllipseIcon />} />
        <h2 className="font-bold text-[64px] text-transparent bg-clip-text leading-[81.92px] bg-gradient-to-b from-[#138EFF] to-[#1DD7F0] pb-4 w-max">
          Proyectos
        </h2>
        <Decorator icon={<EllipseIcon />} />
      </div>
      <section className="flex gap-16">
        <div className="bg-[#0F1115] border border-[#2E3440] w-[692px] h-[360px]"></div>
        <div className="bg-[#0F1115] border border-[#2E3440] w-[440px] h-[360px]"></div>
      </section>

      <section className="flex gap-16">
        <div className="bg-[#0F1115] border border-[#2E3440] w-[440px] h-[360px]"></div>
        <div className="bg-[#0F1115] border border-[#2E3440] w-[692px] h-[360px]"></div>
      </section>
    </main>
  );
}

export default Portfolio;
