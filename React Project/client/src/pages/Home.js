// pages/Home.js
import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import MapView from "../components/MapView"; // we'll build this
import Header from "../components/Header"; // optional

const Home = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div>
      {/* Optional header */}
      {/* <Header /> */}

      <ProfileList onShowMap={setSelectedProfile} />

      {selectedProfile && (
        <MapView
          lat={selectedProfile.lat}
          lng={selectedProfile.lng}
          name={selectedProfile.name}
        />
      )}
    </div>
  );
};

export default Home;