const SkeletonEpisodes = () => {
  return (
    <div className="w-full min-h-[81.7vh] h-full bg-[url('./assets/episodes.avif')] bg-cover bg-center flex items-center justify-center px-2">
      <div className="w-full max-w-4xl p-4 rounded-lg flex flex-col items-center justify-start">
        <h2 className="text-3xl pb-4 font-indie font-semibold text-white">
          List of Episodes
        </h2>
        <div className="overflow-x-auto w-full bg-white rounded-lg shadow-md animate-pulse">
          <table className="min-w-full rounded-lg bg-gray-50">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">
                  <div className="h-4 w-24 bg-gray-300 rounded" />
                </th>
                <th className="px-4 py-2">
                  <div className="h-4 w-32 bg-gray-300 rounded" />
                </th>
                <th className="px-4 py-2">
                  <div className="h-4 w-24 bg-gray-300 rounded" />
                </th>
                <th className="px-4 py-2">
                  <div className="h-4 w-20 bg-gray-300 rounded" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, idx) => (
                <tr key={idx} className="h-[45px]">
                  <td className="px-4 py-2">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SkeletonEpisodes;
