import AboutLoomDialog from "@/Design/components/AboutLoomDialog";
import GetInTouchDialog from "@/Design/components/GetInTouchDialog";
import LogoutDialog from "@/Design/components/LogoutDialog";
import MedicalDialog from "@/Design/components/MedicalDialog";
import PrivacyDialog from "@/Design/components/PrivacyDialog";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-[#efeee7] min-h-screen flex flex-col justify-center items-center">
      <div
        className=" bg-[#F6F5F5] p-8 border-[1px] mb-[100px] max-w-md w-full flex flex-col items-center space-y-4"
        style={{
          boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)",
        }}
      >
        <h2 className="text-2xl w-full text-start font-semibold mb-6 underline">
          Hi Yel
        </h2>
        <div className="flex flex-col space-y-2 w-full">
          <button className="border-b-2 py-2 w-full text-left text-sm uppercase opacity-70">
            SAVE
          </button>

          <MedicalDialog />
          <PrivacyDialog />
          <GetInTouchDialog />
          <AboutLoomDialog />
          <LogoutDialog />
        </div>
        <p className="text-xs mt-6 opacity-50">Version 0.001</p>
        {/* <p className="mt-2 text-sm opacity-70">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log In
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Profile;
