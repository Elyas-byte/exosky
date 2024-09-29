// src/Planet.js

import React from 'react';

const Planet = ({ planet }) => {
    // Generate a placeholder image URL based on planet name
    const imageUrl = `https://via.placeholder.com/150?text=${planet.pl_name}`;

    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-4 m-2 w-60">
            <img src={imageUrl} alt={planet.pl_name} className="rounded-lg mb-2 w-60" />
            <h2 className="text-lg font-bold text-white">{planet.pl_name}</h2>
            <p className="text-gray-400"><strong>Mass:</strong> {planet.pl_bmassj} Jupiter Masses</p>
            <p className="text-gray-400"><strong>Distance:</strong> {planet.pl_orbsmax} AU</p>
            <p className="text-gray-400"><strong>Discovery Year:</strong> {planet.pl_disc}</p>
        </div>
    );
};

export default Planet;
