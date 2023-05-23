function Background({ theme }: { theme: boolean }) {
  return (
    <>
      <div className="absolute top-0 z-[-1] min-h-[3240px] w-full bg-[#E6E6E6] dark:bg-[#0B0B0B] dark:opacity-80"></div>
      {theme ? (
        <img
          className="absolute top-0 z-[-1] min-h-[3240px] w-full opacity-[64%] mix-blend-overlay"
          src="/images/darkBackground.png"
          alt="Imagen de fondo"
        />
      ) : (
        <img
          className="absolute top-0 z-[-1] min-h-[1080px] w-full opacity-[64%] mix-blend-overlay"
          src="/images/defaultBackground.png"
          alt="Imagen de fondo"
        />
      )}
      <img
        className="absolute top-0 z-[-1] min-h-[3240px] opacity-[32%] mix-blend-overlay"
        src="/images/particles.png"
        alt="Partículas de fondo"
      />
    </>
  );
}

export { Background };
