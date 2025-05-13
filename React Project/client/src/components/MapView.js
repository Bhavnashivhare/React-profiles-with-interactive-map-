import React, { useEffect, useState } from "react";

function MapView({ lat, lng, name }) {
  const [loading, setLoading] = useState(true);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMapError(false);

    const timer = setTimeout(() => {
      if (!lat || !lng) {
        setMapError(true);
      }
      setLoading(false);
    }, 1000); // simulate load time

    return () => clearTimeout(timer);
  }, [lat, lng]);

  if (loading) {
    return <p className="text-center mt-6 text-blue-600">🧭 Loading map...</p>;
  }

  if (mapError) {
    return (
      <p className="text-center mt-6 text-red-600">
        ❌ Failed to load map. Invalid location.
      </p>
    );
  }

  return (
    <div className="mt-6 border rounded shadow overflow-hidden">
      <iframe
        title="map"
        src={`https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
        width="100%"
        height="300"
        loading="lazy"
      ></iframe>
      <p className="text-center p-2 font-semibold">Location of {name}</p>
    </div>
  );
}

export default MapView;