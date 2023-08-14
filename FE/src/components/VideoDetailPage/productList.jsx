import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Image, Flex, Text, Center, SimpleGrid } from "@chakra-ui/react";
import { PORT } from "../helper";

function GetProductList({ videoID }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProductList() {
      try {
        const productList = await axios.get(
          `http://localhost:${PORT}/api/products/list?videoID=${videoID}`
        );
        setProductList(productList.data);
      } catch (error) {
        console.error("Error fetching comments:", error.message);
      }
    }

    fetchProductList();
  }, []);
  return (
    <Center>
      <Flex align="center" justify="center">
        <SimpleGrid columns={5} spacing="10px">
          {productList.map((product) => (
            <Box key={product._id} maxW="sm" m="1" textAlign="center">
              <Image
                height="200px"
                width="100%"
                objectFit="cover"
                src={product.url_image}
                alt={product.name}
                borderRadius="lg"
              />
              <Text fontSize="sm" fontWeight="bold">
                {product.name}
              </Text>{" "}
              <Text fontSize="sm">${product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Center>
  );
}

export default GetProductList;
