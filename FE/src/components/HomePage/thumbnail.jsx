import { useState, useEffect } from "react";
import axios from "axios";
import { PORT } from "../helper";

// const BASE_URL = process.env.BASE_URL;

function UseThumbnails() {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    async function fetchThumbnails() {
      try {
        const response = await axios.get(`https://localhost:${PORT}/api/`);
        setThumbnails(response.data);
      } catch (error) {
        console.error("Error fetching thumbnails:", error.message);
      }
    }

    fetchThumbnails();
  }, []);
  return thumbnails;
}

export default UseThumbnails;
