import Decorator, { DecoratorProps } from "@/common/Decorator";
import type { PropsWithChildren } from "react";

interface TSProps extends DecoratorProps, PropsWithChildren {
  className: string;
}

const TitleSeparator = ({ icon, className, children }: TSProps) => {
  return (
    <div className="flex items-center gap-16">
      <Decorator icon={icon} />
      <h2
        className={`font-bold pb-1 md:pb-4 text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b ${className} w-max`}
      >
        {children}
      </h2>
      <Decorator icon={icon} />
    </div>
  );
};

export default TitleSeparator;
