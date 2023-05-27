import type { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-11/12 sm:w-2/3 text-white">
      {children}
    </p>
  );
};

export default Paragraph;
