import React from "react";

const ProfileCard = ({ profile, onShowMap }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 text-center">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
      <p className="text-gray-500 mt-2">{profile.description}</p>
      <button
        onClick={() => onShowMap(profile)}
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        📍 Show on Map
      </button>
    </div>
  );
};

export default ProfileCard;