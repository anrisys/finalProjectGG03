import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Box, Stack, CardBody, Text } from "@chakra-ui/react";

function GetComments({ videoID }) {
  // Pakai videoID di parameter nya
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          `http://localhost:9999/api/comments?videoID=${videoID}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    }

    fetchComments();
  }, []);
  return (
    <Stack spacing="2">
      <Card>
        <Text>Comments : </Text>
        {comments.map((comment) => (
          <Card key={comment._id}>
            <CardBody>
              <Text>{comment.username} :</Text>
              <Text>{comment.comment}</Text>
            </CardBody>
          </Card>
        ))}
      </Card>
    </Stack>
  );
}

export default GetComments;
