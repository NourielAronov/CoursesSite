import React from "react";
import axios from "axios";

import CoursesTable from "../CoursesTable";
import { useState, useEffect } from "react";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.mocki.io/v1/07bc5d06");
        if (!response.ok) {
          console.log(response.status);
        }
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 align="center">רישום לקורסים</h1>
      <CoursesTable courses={data} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
