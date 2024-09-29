import React from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetail = () => {
  const { planetName } = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{planetName}</h1>
      {/* Here you can include a real map or plotting logic */}
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        <p>Map for {planetName}</p>
      </div>
    </div>
  );
};

export default PlanetDetail;
