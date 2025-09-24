const Banner = () => {
  return (
    <div className="min-h-[81.7vh] h-full flex flex-col items-center justify-center bg-[url('./assets/info.avif')] bg-center sm:bg-center md:bg-center lg:bg-center   bg-cover bg-[position:top_20%]">
      <div className="w-full h-full text-white flex items-center justify-start">
        <p className="bg-white ml-2 w-[55%] p-4 text-sm text-gray-900 md:text-lg font-fredoka">
          Rick y Morty sigue las peligrosas
          aventuras interdimensionales de un científico genio y sociópata , Rick
          Sánchez, y su nieto adolescente, Morty Smith. Juntos, exploran un
          vasto multiverso, enfrentándose a alienígenas, realidades alternativas
          y peligros cósmicos, mientras lidian con la dinámica familiar y sus
          propias disfunciones.
        </p>
      </div>
    </div>
  );
};
export default Banner;
