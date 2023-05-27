import type { ReactNode } from "react";

export interface DecoratorProps {
  icon?: ReactNode;
}

const Decorator = ({ icon }: DecoratorProps) => {
  return (
    <div className="flex items-center gap-16">
      <div>{icon}</div>
      <div className="hidden sm:block">{icon}</div>
      <div className="hidden md:block">{icon}</div>
    </div>
  );
};

export default Decorator;
