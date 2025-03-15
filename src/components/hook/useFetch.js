import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = fetch();
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => alert(err));
  }, []);

  return { data: data };
};
