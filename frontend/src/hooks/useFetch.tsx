import { useEffect, useState } from "react";

export function useFetch<T>(url: URL | string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const request = await fetch(url, { method: "GET" });
      const response = await request.json();
      setData(response);
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
