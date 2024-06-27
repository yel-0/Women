import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrivacyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-b-2 py-2 w-full text-left text-sm uppercase opacity-70">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-semibold mb-2">
            Privacy Policy
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-gray-700">
            <p className="mb-4">
              Your privacy is important to us. This Privacy Policy outlines how
              we collect, use, and protect your personal information. We are
              committed to ensuring that your information is secure and
              protected.
            </p>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us
              when you register on our website, use our services, or contact us.
              This may include your name, email address, and other contact
              information.
            </p>
            <p className="mb-4">
              We use your information to provide and improve our services,
              communicate with you, and ensure a personalized experience. We do
              not sell or share your information with third parties without your
              consent, except as required by law.
            </p>
            <p className="mb-4">
              We implement security measures to protect your personal
              information from unauthorized access and use. However, please note
              that no method of transmission over the internet or method of
              electronic storage is completely secure.
            </p>
            <p>
              By using our website, you consent to the collection and use of
              your information as described in this Privacy Policy. We may
              update this policy from time to time, and any changes will be
              posted on this page.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyDialog;
