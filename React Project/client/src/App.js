import React, { useState } from "react";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import profiles from "./data/profiles";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🌟 Meet Our Top Creators
      </h1>

      <ProfileList profiles={profiles} onShowMap={setSelectedProfile} />

      {selectedProfile && (
        <MapView
          lat={selectedProfile.lat}
          lng={selectedProfile.lng}
          name={selectedProfile.name}
        />
      )}
    </div>
  );
}

export default App;