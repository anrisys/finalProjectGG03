import { useState, useEffect } from "react";
import axios from "axios";
import {
  Textarea,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

function SubmitComment({ videoID }) {
  const [formComment, setFormComment] = useState({
    username: "",
    comment: "",
    videoID: `${videoID}`,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9999/api/comments",
        formComment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Comment submitted successfully!");
      } else {
        console.error("Error submitting comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormComment({
      ...formComment,
      [name]: value,
    });
  };

  return (
    <Box>
      <Heading size="sm">New Comment</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mt="0">
          <FormLabel>Username:</FormLabel>
          <Input
            type="text"
            name="username"
            value={formComment.username}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mt="0">
          <FormLabel>Comment:</FormLabel>
          <Textarea
            name="comment"
            value={formComment.comment}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button mt="1" colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default SubmitComment;
