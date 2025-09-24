import { useEffect, useState } from "react";
import SkeletonEpisodes from "./skeleton/SkeletonEpisodes";
const Episodes = () => {
  const [chapters, setChapters] = useState(() => {
    const saved = localStorage.getItem("chapters");
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://rickandmortyapi.com/api";
  const fetchChapters = async () => {
    try {
      const response = await fetch(`${baseUrl}/episode`);
      if (!response.ok) throw new Error("Error en fetch inicial");
      const items = await response.json();
      const chapters = items.results;

      const chaptersWithDetails = await Promise.all(
        chapters.map(async (chapter) => {
          const urls = chapter.characters || [];
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
            ...chapter,
            characters: details,
          };
        })
      );

      setChapters(chaptersWithDetails);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (chapters.length === 0) {
      setLoading(true);
      fetchChapters();
    }
  }, []);
  useEffect(() => {
    if (chapters) localStorage.setItem("chapters", JSON.stringify(chapters));
    console.log(chapters);
  }, [chapters]);

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
              {chapters.map((chapter) => (
                <tr
                  key={chapter.id}
                  className="odd:bg-[#ececec] even:bg-[#8699c4] border-b  odd:text-gray-700 even:text-white  border-gray-200 h-[45px]"
                >
                  <td className="w-[20%] font-fredoka p-2">
                    <span className="font-semibold"> {chapter.name} </span>{" "}
                    <span className="text-[14px]">
                      <br /> {chapter.episode}
                      <br /> {chapter.air_date}
                    </span>
                  </td>
                  <td className="w-[80%] p-2">
                    <div className="">
                      {chapter.characters
                        .filter((char) => char !== null)
                        .slice(0, 10)
                        .map((char, idx, arr) => (
                          <span className="font-fredoka" key={char.id}>
                            {char.name}
                            {idx < arr.length - 1 ? ", " : "."}
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
