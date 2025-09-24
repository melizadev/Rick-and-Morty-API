const SkeletonCharacters = () => {
  return (
    <div className="bg-[url('./assets/chbg.avif')] min-h-[81.7vh] h-full bg-cover bg-[position:center_65%] bg w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-indie font-semibold text-white pt-4 mb-6 animate-pulse">
        Loading Characters...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full h-full max-w-6xl py-4">
        {[...Array(4)].map((idx) => (
          <div
            key={idx}
            className="bg-white w-full max-w-[220px] h-[260px] rounded-lg shadow-md flex flex-col items-center justify-center p-4 animate-pulse mx-auto"
          >
            <div className="h-5 w-3/4 bg-gray-200 rounded-full mb-3" />
            <div className="h-[140px] w-[140px] bg-gray-300 rounded-full mb-3" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkeletonCharacters;
