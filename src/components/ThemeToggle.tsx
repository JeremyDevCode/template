import SunIcon from "@/assets/icons/SunIcon";
import MoonIcon from "@/assets/icons/MoonIcon";

interface ThemeProps {
  active: boolean;
  handleClick: () => void;
  disabled: boolean;
}

function ThemeToggle({ active, handleClick, disabled }: ThemeProps) {
  return (
    <button
      className={`group relative flex h-16 w-32 items-center rounded-full border-t-2 border-transparent px-4 text-[#141414] transition-all duration-300 hover:cursor-pointer hover:border-[#3EB249] ${
        active ? "bg-[#22222252]" : "bg-[#14141452]"
      } ${disabled && "cursor-default opacity-50"}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span
        className={`absolute flex h-12 w-12 items-center justify-center bg-[#E6E6E6] transition-all group-hover:text-[#3EB249] ${
          active ? "left-16" : "left-4"
        } rounded-full`}
      >
        {active ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}

export { ThemeToggle };
