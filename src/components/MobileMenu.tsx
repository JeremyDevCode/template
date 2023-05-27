import { FC, ComponentProps, useState } from "react";

interface Props extends ComponentProps<"nav"> {
  className: string;
}

const MobileMenu: FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const changeShow = () => {
    setShow((state) => !state);
  };
  return (
    <div className={`${props.className}`}>
      <button type="button" title="Toggle menu" onClick={changeShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          version="1.1"
          fill="#d9d9d9"
          className="h-8 w-8 sm:h-12 sm:w-12"
        >
          <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z" />
        </svg>
      </button>
      {show && (
        <ul className="absolute w-[90svw] right-[5svw] backdrop-blur p-5 sm:p-10 flex flex-col justify-center items-center gap-3 sm:gap-6 text-xl sm:text-3xl border border-[#4E586C] rounded-md mt-2 sm:mt-4">
          <li>
            <a onClick={changeShow} href="#">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={changeShow} href="#about">
              Sobre mí
            </a>
          </li>
          <li>
            <a onClick={changeShow} href="#projects">
              Proyectos
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
