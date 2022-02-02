import { useEffect, useState } from "react";

const useFetch = <T>(URL: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    };
    fetchAPI();
  }, []);

  return data;
};

export default useFetch;
