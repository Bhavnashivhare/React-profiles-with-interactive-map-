import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, onShowMap }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onShowMap={onShowMap}
        />
      ))}
    </div>
  );
};

export default ProfileList;