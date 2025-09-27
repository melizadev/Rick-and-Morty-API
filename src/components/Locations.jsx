import { useEffect, useState } from "react";
import SkeletonLocations from "./skeleton/SkeletonLocations";
const Locations = () => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState(() => {
    const saved = localStorage.getItem("locations");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (locations.length === 0) {
      setLoading(true);
      fetchLocation();
    }
  }, []);

  useEffect(() => {
    if (locations.length > 0)
      localStorage.setItem("locations", JSON.stringify(locations));
  }, [locations]);

  const fetchLocation = async () => {
    const baseUrl = "https://rickandmortyapi.com/api";
    try {
      const locationRes = await fetch(`${baseUrl}/location`);
      const locationData = await locationRes.json();
      const location = locationData.results;
      setLocations(location);
    } catch (err) {
      console.error("Error fetching data:", err);
      setLocations([]);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  if (loading) return <SkeletonLocations />;

  return (
    <div className="w-full min-h-screen  bg-[url('./assets/location.avif')] bg-center bg-cover flex flex-col items-center justify-center p-4 gap-4 bg">
      <h2 className="text-3xl font-indie font-semibold text-gray-50">
        List of Locations
      </h2>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left font-fredoka text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left font-fredoka text-gray-700">
                Type
              </th>
              <th className="px-4 py-2 text-left font-fredoka text-gray-700">
                Dimension
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc) => (
              <tr key={loc.id} className="odd:bg-gray-50 even:bg-gray-100">
                <td className="px-4 py-2 font-fredoka">{loc.name}</td>
                <td className="px-4 py-2 font-fredoka">{loc.type}</td>
                <td className="px-4 py-2 font-fredoka">{loc.dimension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Locations;
