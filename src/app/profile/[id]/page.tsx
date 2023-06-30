import React from "react";

const UserProfilePage = ({ params }: any) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile Page{" "}
        <span className="p-2 rounded bg-orange-500 text-black ml-2">
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default UserProfilePage;
