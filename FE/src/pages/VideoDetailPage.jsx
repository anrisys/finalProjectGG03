import { Container, Box, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoDetailPage/videoPlayer";
import GetComments from "../components/VideoDetailPage/commentList";
import GetProductList from "../components/VideoDetailPage/productList";
import SubmitComment from "../components/VideoDetailPage/SubmitComment";

function VideoDetailPage() {
  const { videoID } = useParams();
  return (
    <Container maxWidth="full" h="100vh" p="4">
      <Flex h="100%" alignItems="stretch">
        {/* Left Column */}
        <Box flex="4" bg="gray.200" p="4">
          <Box h="60%" bg="blue.200" mb="4">
            {<VideoPlayer videoID={videoID} />}
          </Box>
          <Box h="40%" bg="green.200">
            {<GetProductList videoID={videoID} />}
          </Box>
        </Box>
        {/* Right Column */}
        <Box flex="1" bg="gray.300" p="4">
          <Box h="70%" bg="orange.200" overflowY="auto">
            {<GetComments videoID={videoID} />}
          </Box>
          <Box
            h="30%"
            bg="pink.200"
            mt="4"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box h="100%" bg="pink.200" overflowY="auto">
              <SubmitComment videoID={videoID} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default VideoDetailPage;
