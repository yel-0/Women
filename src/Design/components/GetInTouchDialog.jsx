import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GetInTouchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-b-2 py-2 w-full text-left text-sm uppercase opacity-70 hover:opacity-90 transition-opacity duration-150">
        Get in Touch
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-lg font-semibold mb-2">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-gray-800">
            <p className="mb-3">
              We value your feedback and inquiries. Whether you have a question,
              suggestion, or need assistance, we are here to help. You can reach
              out to us through the following methods:
            </p>
            <p className="mb-3">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 underline"
              >
                support@example.com
              </a>
              <br />
              Feel free to send us an email anytime. We aim to respond within 24
              hours.
            </p>
            <p className="mb-3">
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-blue-600 underline">
                +1 234 567 890
              </a>
              <br />
              Our support team is available Monday through Friday, from 9 AM to
              5 PM.
            </p>
            <p className="mb-3">
              <strong>Address:</strong>
              <br />
              1234 Main Street,
              <br />
              Suite 100,
              <br />
              City, State, 12345
            </p>
            <p className="mb-3">
              You can also connect with us on social media:
            </p>
            <p className="space-y-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Twitter
              </a>
              <br />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Instagram
              </a>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default GetInTouchDialog;
