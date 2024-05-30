import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetch();
  }, [url]);

  const reFetch = async (url) => {
    setLoading(true);
    try {
      console.log(url);
      const res = await axios.get(url);
      console.log(res);
      setData(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};
export default useFetch;
