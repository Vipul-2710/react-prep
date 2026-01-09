import { useState, useEffect } from "react";

function useCustomHook(api) {
  const [result, setResult] = useState(null);
  const [loding, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!api) return;

    async function getData() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(api);
        console.log(response);
        const data = await response.json();
        console.log("sata", data);
        setResult(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [api]);
  return { result, loding, error };
}

export default useCustomHook;
