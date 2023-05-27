import type { ReactNode } from "react";

interface ButtonProps {
  content: string;
  icon?: ReactNode;
}

const Button = ({ content, icon }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-4 rounded-lg border-t-2 border-[#25262E] bg-[#0f1115] px-6 py-2 sm:px-10 sm:py-4 text-[#E6E6E6] relative group/button overflow-hidden">
      <span className="w-[40%] h-full bg-gradient-to-b from-[#1F252D] to-[#0F1115] absolute translate-y-16 rounded-[50%] group-hover/button:w-[80%] group-hover group-hover/button:to-[#6CEF79] group-hover/button:translate-y-[3.5rem] transition-all duration-300 blur"></span>
      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium z-10">{content}</span>
      {icon}
    </button>
  );
};

export default Button;
