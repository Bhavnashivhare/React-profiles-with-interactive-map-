import React from "react";

function ProfileList({ profiles, onShowMap, onDelete, onViewDetail }) {
  if (!profiles.length) {
    return (
      <p className="text-center text-gray-600 mt-10">
        No profiles found. Try adding some or search with a different name.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-white p-5 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={profile.photo || "https://via.placeholder.com/150"}
            alt={profile.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
          <p className="text-gray-600 text-center mb-4">
            {profile.description}
          </p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => onShowMap(profile)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 rounded"
            >
              📍 Summary
            </button>
            <button
              onClick={() => onViewDetail(profile)}
              className="bg-gray-500 hover:bg-gray-600 text-white py-1 rounded"
            >
              🔎 View Details
            </button>
            <button
              onClick={() => onDelete(profile.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-1 rounded"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
