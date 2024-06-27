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
import { Plus } from "lucide-react";

const CreateDialogFaq = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleCreate = () => {
    // Implement create logic here
    console.log("Creating FAQ with question:", newQuestion);
    console.log("Creating FAQ with answer:", newAnswer);
    // Optionally, you can reset state after creating
    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Plus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New FAQ</DialogTitle>
          <DialogDescription>
            Enter a new question and answer, then save.
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="New Question"
          className="w-full p-2 border border-gray-300 rounded-lg mt-4"
        />
        <Textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg h-[200px]"
        />

        <div className="flex justify-end space-x-2 mt-6">
          <Button onClick={handleCreate} className="">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialogFaq;
