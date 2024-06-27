import React from "react";
import { Button } from "@/components/ui/button"; // Assuming this is your button component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UpdatePostDialog from "./UpdatePostDialog";
import DeletePostDialog from "./DeletePostDialog";

const PostCardForAdmin = ({ title, context, category }) => {
  const handleEdit = () => {
    console.log(`Editing post: ${title}`);
    // Implement edit functionality here
  };

  const handleDelete = () => {
    console.log(`Deleting post: ${title}`);
    // Implement delete functionality here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      {/* <CardContent className="max-h-[200px] overflow-y-auto">
        <p>{context}</p>
      </CardContent> */}
      <CardFooter className="flex flex-row justify-between items-center p-5">
        <UpdatePostDialog
          postId={1}
          initialTitle={title}
          initialContext={context}
          initialCategory={category}
        />
        <DeletePostDialog postId={1} postTitle={title} />
      </CardFooter>
    </Card>
  );
};

export default PostCardForAdmin;
