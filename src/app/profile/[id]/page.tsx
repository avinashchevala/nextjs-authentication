"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const UserProfilePage = ({ params }: any) => {
  const router = useRouter();
  const logout = async () => {
    console.log("logging out")
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
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
      <button
        onClick={logout}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfilePage;
