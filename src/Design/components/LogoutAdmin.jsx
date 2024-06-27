import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const LogoutAdmin = () => {
  const handleLogout = () => {
    console.log("User logged out");
    // Implement the logout functionality here
  };

  return (
    <Dialog>
      <DialogTrigger className="flex text-sm items-center py-3 px-5 w-full  hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200">
        <LogOut size={18} className="mr-3" />
        Logout
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log Out</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out? You will need to log in again to
            access your account.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-6">
          <Button onClick={handleLogout} className="bg-red-500 text-white">
            Log Out
          </Button>
          <Button className="bg-gray-500 text-white">Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutAdmin;
