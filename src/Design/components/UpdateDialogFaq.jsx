import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const UpdateDialogFaq = ({ question, answer }) => {
  const [updatedQuestion, setUpdatedQuestion] = useState(question);
  const [updatedAnswer, setUpdatedAnswer] = useState(answer);

  const handleUpdate = () => {
    // onUpdate(updatedQuestion, updatedAnswer);
  };

  return (
    <Dialog>
      <DialogTrigger>Update</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update FAQ</DialogTitle>
          <DialogDescription>
            Modify the question and answer, then save changes.
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={updatedQuestion}
          onChange={(e) => setUpdatedQuestion(e.target.value)}
          placeholder="New Question"
          className="w-full p-2 border border-gray-300 rounded-lg mt-4"
        />
        <Textarea
          value={updatedAnswer}
          onChange={(e) => setUpdatedAnswer(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg h-[200px] "
        />

        <div className="flex justify-end space-x-2 mt-6">
          <Button onClick={handleUpdate} className="">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDialogFaq;
