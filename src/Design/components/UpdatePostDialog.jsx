import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming you have dialog components

const UpdatePostDialog = ({
  postId,
  initialTitle,
  initialContext,
  initialCategory,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [context, setContext] = useState(initialContext);
  const [category, setCategory] = useState(initialCategory);

  const handleUpdate = () => {};

  return (
    <Dialog>
      <DialogTrigger className=" border-2 border-black rounded-lg p-2">
        Update
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Post</DialogTitle>
          <DialogDescription>
            Modify the post details and save changes.
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-full p-2 border border-gray-300 rounded-lg mt-4"
        />
        <textarea
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Post Context"
          className="w-full p-2 border border-gray-300 rounded-lg mt-4 h-40 resize-none"
        ></textarea>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mt-4"
        >
          <option value="General">General</option>
          <option value="Updates">Updates</option>
          <option value="News">News</option>
        </select>
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePostDialog;
