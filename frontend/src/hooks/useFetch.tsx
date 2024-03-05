import { useEffect, useState } from "react";

type userCreate = {
  email: string;
  name: string;
};

export function useFetch<T>(url: URL | string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const content: userCreate = {
    email: "John1@mail.dk",
    name: "John",
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify(content),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });

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
