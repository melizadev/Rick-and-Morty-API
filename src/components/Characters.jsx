import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import SkeletonCharacters from "./skeleton/SkeletonCharacters";
const Characters = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("characters");
    return saved ? JSON.parse(saved) : [];
  });
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    if (characters.length === 0) {
      setLoading(true);
      fetchCharacters();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (characters.length > 0)
      localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  useEffect(() => {
    const onResize = () => {
      setPerPage(getItemsPerPage());
      setPage(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const fetchCharacters = async () => {
    const baseUrl = "https://rickandmortyapi.com/api";
    try {
      const charactersRes = await fetch(`${baseUrl}/character`);
      const charactersData = await charactersRes.json();
      const character = charactersData.results;
      setCharacters(character);
    } catch (err) {
      console.error("Error fetching data:", err);
      setCharacters([]);
    }
  };

  function getItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 1200) return 6;
    if (width >= 768) return 3;
    if (width >= 400) return 2;

    return 1;
  }

  const pages = Math.ceil(characters.length / perPage);
  const start = page * perPage;
  const visibleItems = characters.slice(start, start + perPage);
  if (loading) return <SkeletonCharacters />;

  return (
    <div className="w-full min-h-[81.7vh] h-full bg-[url('./assets/chbg.avif')] bg-cover bg-[position:center_65%] flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-indie font-semibold text-white ">
        Characters
      </h2>
      <div className="flex items-center justify-center  gap-6 w-full">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 bg-white p-2 rounded"
          >
            <h2 className="font-fredoka font-semibold pb-2 text-neutral-700">
              {item.name}
            </h2>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", height: "200px" }}
            />
            <div className="flex items-center justify-start gap-1">
              {item.status === "Alive" ? (
                <FaCircle size="12px" color="green" />
              ) : item.status === "Dead" ? (
                <FaCircle size="12px" color="red" />
              ) : (
                <FaCircle size="12px" color="gray" />
              )}
              <p className="font-fredoka text-neutral-800"> {item.status} -</p>
              <p className="font-fredoka text-neutral-800">{item.species}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex item-items justiy-center gap-3 bg-[#ffffff] p-2 bg-opacity-20 rounded-md">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className=" text-white rounded-full disabled:opacity-50 cursor-pointer "
        >
          <FaArrowAltCircleLeft color="#352b2b" size={"20px"} />
        </button>
        <p className="font-fredoka text-[15px] text-neutral-800">
          Pg {page} of {pages}{" "}
        </p>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, pages - 1))}
          disabled={page === pages - 1}
          className=" text-white rounded-full disabled:opacity-50 cursor-pointer "
        >
          <FaArrowAltCircleRight color="#352b2b" size={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default Characters;
