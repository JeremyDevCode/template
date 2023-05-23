import type { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-[32px] text-center w-[40%] leading-[40px] text-[#141414] dark:text-white">
      {children}
    </p>
  );
};

export default Paragraph;
