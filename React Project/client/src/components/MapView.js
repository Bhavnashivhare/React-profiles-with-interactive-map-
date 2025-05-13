import React from "react";

const MapView = ({ lat, lng, name }) => {
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        📍 Location of {name}
      </h2>
      <div className="w-full h-[400px] rounded-lg overflow-hidden border-4 border-blue-200">
        <iframe
          src={mapUrl}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapView;