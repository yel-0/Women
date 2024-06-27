import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming you have dialog components
import { Plus } from "lucide-react";

const CreatePostDialog = () => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [category, setCategory] = useState("");

  const handleCreate = () => {
    setTitle("");
    setContext("");
    setCategory("");
    // Implement creation logic here
    console.log("Post created:", { title, context, category });
  };

  return (
    <Dialog>
      <DialogTrigger className="border-2  border-gray-300 rounded-lg p-2">
        <Plus />
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-10">
        {" "}
        {/* Increased padding and max-width */}
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            Create New Post
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-500">
            Enter the details for the new post.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Post Context"
            className="w-full p-4 border border-gray-300 rounded-lg h-52 resize-none"
          ></textarea>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Post Category"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={handleCreate}
            className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Create
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
