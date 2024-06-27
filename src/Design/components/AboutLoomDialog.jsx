import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AboutLoomDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-b-2 py-2 w-full text-left text-sm uppercase opacity-70 hover:opacity-90 transition-opacity duration-150">
        About Loom
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-lg font-semibold mb-2">
            About Loom
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-gray-800">
            <p className="mb-3">
              Welcome to <strong>Loom</strong>, a dedicated platform for women
              to explore, learn, and connect. At Loom, we believe in the power
              of shared stories and knowledge, creating a space where women can
              come together to discuss their bodies, health, and personal
              journeys.
            </p>
            <p className="mb-3">
              Our mission is to provide a safe and supportive community where
              you can read about the experiences of other women, share your own
              story, and find inspiration from curated quotes and articles. We
              are committed to fostering a positive and empowering environment
              where every voice is heard and respected.
            </p>
            <p className="mb-3">
              Loom is more than just a website; it's a community. We aim to
              build connections and encourage open, honest conversations about
              the many aspects of womanhood. Whether you're looking for advice,
              support, or simply a place to share, Loom is here for you.
            </p>
            <p className="mb-3">
              Thank you for being a part of Loom. Together, we can create a
              vibrant and empowering space for all women.
            </p>
            <p className="text-sm italic text-gray-600">~ The Loom Team</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AboutLoomDialog;
