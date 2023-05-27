import type { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-xl sm:text-2xl lg:text-3xl text-center [background-image:linear-gradient(111.9deg,_#FFFFFF_35.66%,_#898989_74.28%)] bg-clip-text text-transparent max-w-2xl lg:max-w-xl leading-[32px] !sm:leading-[40px]" style={{ '--stagger': 2 } as React.CSSProperties} data-animate>
      {children}
    </p>
  );
};

export default Paragraph;
