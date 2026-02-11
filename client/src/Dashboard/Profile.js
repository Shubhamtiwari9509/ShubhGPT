import React, { useEffect, useState } from "react";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}` // token from login
          }
        });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <p className="text-center mt-10 text-gray-600">Loading profile...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
         
        <img
          src={`https://ui-avatars.com/api/?name=${user.userName}&background=0D8ABC&color=fff&size=120`}
          alt="Profile Avatar"
          className="mx-auto rounded-full   border-4 border-blue-500  mb-4"
        />

        <h1 className="text-2xl font-bold text-gray-800">{user.userName}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500 mt-2">Joined: {user.joined}</p>
      </div>
    </div>
  );
};

export default Profile;
