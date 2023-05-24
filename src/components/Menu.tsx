import type { MouseEvent } from 'react';

function Menu() {
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href')!;
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return <ul
    className="flex items-center justify-center gap-14 text-2xl font-medium bg-[#0F1115A3] border-t-2 border-[#4E586C] rounded-full py-8 px-36"
  >
    <li>
      <a href="/">Inicio</a>
    </li>
    <li>
      <a href="#about" onClick={handleScroll}>Sobre mí</a>
    </li>
    <li>
      <a href="#projects" onClick={handleScroll}>Proyectos</a>
    </li>
  </ul>
}

export default Menu;