import React, { useState } from "react";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import profilesData from "./data/profiles"; // Assuming profiles.js is in the 'data' folder

function App() {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({
    name: "", description: "", photo: "", lat: "", lng: ""
  });

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProfile = () => {
    const id = Date.now();
    const { name, description, photo, lat, lng } = newProfile;

    if (!name || !description || !photo || !lat || !lng) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      id,
      name,
      description,
      photo,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };

    setProfiles([...profiles, newEntry]);
    setNewProfile({ name: "", description: "", photo: "", lat: "", lng: "" });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
    if (selectedProfile?.id === id) {
      setSelectedProfile(null);
    }
  };

  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        🌟 Meet Our Top Creators
      </h1>

      {/* Admin Add Profile Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold mb-4">➕ Add New Profile</h2>
        <div className="grid grid-cols-2 gap-4">
          {["name", "description", "photo", "lat", "lng"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={newProfile[field]}
              onChange={(e) =>
                setNewProfile({ ...newProfile, [field]: e.target.value })
              }
              className="border p-2 rounded"
            />
          ))}
        </div>
        <button
          onClick={handleAddProfile}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Profile
        </button>
      </div>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="🔍 Search profiles by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 border p-2 mb-6 rounded"
      />

      {/* Profile List */}
      <ProfileList
        profiles={filteredProfiles}
        onShowMap={setSelectedProfile}
        onDelete={handleDeleteProfile}
        onViewDetail={(profile) =>
          alert(
            `Name: ${profile.name}\nDescription: ${profile.description}\nLocation: ${profile.lat}, ${profile.lng}`
          )
        }
      />

      {/* Map View */}
      {selectedProfile && (
        <div className="mt-8">
          <MapView
            lat={selectedProfile.lat}
            lng={selectedProfile.lng}
            name={selectedProfile.name}
          />
        </div>
      )}
    </div>
  );
}

export default App;