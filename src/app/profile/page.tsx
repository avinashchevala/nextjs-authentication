"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  const logout = async () => {
    console.log("logging out");
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile Page </p>
      <h2 className="text-xl rounded bg-green-800 p-5">
        {data === "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={getUserDetails}
        className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-5 rounded"
      >
        GetUserDetails
      </button>
      <button
        onClick={logout}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
