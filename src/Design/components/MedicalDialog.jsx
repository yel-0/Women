import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MedicalDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-b-2 py-2 w-full text-left text-sm uppercase opacity-70">
        Medical Disclaimer
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 bg-[#F6F5F5] rounded shadow-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-semibold mb-2">
            Medical Disclaimer
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-gray-700">
            <p className="mb-4">
              The information provided on this website is for educational and
              informational purposes only and is not intended as medical advice.
              It should not be used to diagnose or treat any medical conditions,
              nor is it a substitute for professional medical care. Please
              consult a qualified healthcare provider for personalized advice
              and treatment.
            </p>
            <p className="mb-4">
              The personal stories shared here are individual experiences and do
              not reflect medical advice. Always seek the guidance of your
              doctor or another qualified health provider with any questions you
              may have regarding your health or a medical condition.
            </p>
            <p>
              By using this website, you acknowledge that the information is
              provided "as is" without any warranties of any kind. Your use of
              this site is at your own risk.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MedicalDialog;
