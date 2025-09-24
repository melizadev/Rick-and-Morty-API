import { useEffect, useState } from "react";
import SkeletonEpisodes from "./skeleton/SkeletonEpisodes";
const Episodes = () => {
  const [episodes, setEpisodes] = useState(() => {
    const saved = localStorage.getItem("epsisodes");
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://rickandmortyapi.com/api";
  const fetchEpisodes = async () => {
    try {
      const response = await fetch(`${baseUrl}/episode`);
      if (!response.ok) throw new Error("Error en fetch inicial");
      const items = await response.json();
      const episodesRes = items.results;

      const EpisodesWithDetails = await Promise.all(
        episodesRes.map(async (episode) => {
          const urls = episode.characters || [];
          const detailPromises = urls.map(async (url) => {
            try {
              const r = await fetch(url);
              if (!r.ok) throw new Error(`Error detalle para URL ${url}`);
              const j = await r.json();
              return j;
            } catch (err) {
              console.log(err);
              return null;
            }
          });

          const details = await Promise.all(detailPromises);

          return {
            ...episode,
            characters: details,
          };
        })
      );

      setEpisodes(EpisodesWithDetails);
    } catch (err) {
      setError(err);
    } finally {
  setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  useEffect(() => {
    if (episodes.length === 0) {
      fetchEpisodes();
  
    }
  }, []);
  useEffect(() => {
    if (episodes.length > 0)
     localStorage.setItem("episodes", JSON.stringify(episodes));
    console.log(episodes);
  }, [episodes]);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <SkeletonEpisodes />;

  return (
    <div className="min-h-[81.7vh] h-full w-full bg-[url('./assets/episodes.avif')] bg-center bg-cover flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl pb-4 font-indie font-semibold text-white">
          List of Episodes
        </h2>
        <div className="lg:w-[80%] md:w-[80%] w-full h-full border-gray-200 rounded-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200 rounded-md">
              <tr className="rounded-md">
                <th className="text-gray-700 font-fredoka text-left px-2 py-2">
                  Episode
                </th>
                <th className="text-gray-700 text-center font-fredoka px-2 py-2">
                  Characters
                </th>
              </tr>
            </thead>
            <tbody className="">
              {episodes.map((episode) => (
                <tr
                  key={episode.id}
                  className="odd:bg-[#ececec] even:bg-[#8699c4] border-b  odd:text-gray-700 even:text-white  border-gray-200 h-[45px]"
                >
                  <td className="w-[20%] font-fredoka p-2">
                    <span className="font-semibold"> {episode.name} </span>{" "}
                    <span className="text-[14px]">
                      <br /> {episode.episode}
                      <br /> {episode.air_date}
                    </span>
                  </td>
                  <td className="w-[80%] p-2">
                    <div className="">
                      {episode.characters.slice(0, 10).map((epis, idx) => (
                        <span className="font-fredoka" key={epis.id}>
                          {epis.name}
                          {idx < 9 ? ", " : "."}
                        </span>
                      ))}
                    </div>
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

export default Episodes;
