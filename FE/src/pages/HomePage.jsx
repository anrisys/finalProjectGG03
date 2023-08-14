import UseThumbnails from "../components/HomePage/thumbnail";
import { Image, Box, SimpleGrid, Heading } from "@chakra-ui/react";
// import { Link } from "react-router-";
import { Link } from "react-router-dom";

function HomePage() {
  const thumbnails = UseThumbnails();

  return (
    <Box>
      <Heading>SimoShop</Heading>
      <SimpleGrid minChildWidth="120px" spacing="10px">
        {thumbnails.map((thumbnail) => (
          <Link key={thumbnail.videoID} to={`/video/${thumbnail.videoID}`}>
            <Box maxW="sm" m="1">
              <Image
                src={thumbnail.url_thumbnail_image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
