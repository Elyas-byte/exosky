import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExoplanetViewer = () => {
  const [exoplanets, setExoplanets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExoplanets = async () => {
      const url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync";
      const query = "SELECT pl_hostname, pl_bmassj, ra, dec FROM exoplanets WHERE pl_bmassj IS NOT NULL LIMIT 10";
      const payload = new URLSearchParams({
        query,
        format: 'json',
      });

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: payload,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          mode: 'no-cors',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setExoplanets(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchExoplanets();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exoplanets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {exoplanets.map((planet, index) => (
          <Link
            key={index}
            to={`/planet/${planet.pl_hostname}`}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={`https://via.placeholder.com/150?text=${planet.pl_hostname}`} // Placeholder for planet images
              alt={planet.pl_hostname}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h2 className="font-semibold">{planet.pl_hostname}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExoplanetViewer;
