import type { ReactNode } from "react";

interface DecoratorProps {
  icon?: ReactNode;
}

const Decorator = ({ icon }: DecoratorProps) => {
  return (
    <div className="flex gap-16">
      {icon}
      {icon}
      {icon}
    </div>
  );
};

export default Decorator;
