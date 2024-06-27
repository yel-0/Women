import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LogoutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-b-2 py-2 w-full text-left text-sm uppercase opacity-70 hover:opacity-90 transition-opacity duration-150">
        Logout
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-lg font-semibold mb-2">
            Confirm Logout
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-gray-800">
            <p className="mb-4">
              Are you sure you want to log out of your account? Logging out will
              end your current session, and you will need to log in again to
              access your account and its features.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-150"
                onClick={() => {
                  // Add your logout functionality here
                  // For example, you could call a logout function
                  alert("You have been logged out."); // Example action
                }}
              >
                Logout
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
