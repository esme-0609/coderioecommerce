import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const useDataFetcher = () => {
  const API_URL = "https://fakestoreapi.com/products";
  let totalPages = 0;
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage=3;
  const perVisit=currentPage*perPage;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_URL}`);
      setPages(result.data);
      console.log(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  totalPages = Math.ceil(pages.length/perPage)
  return {
    loading,
    pages,
    perPage,
    perVisit,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};

export default useDataFetcher;
