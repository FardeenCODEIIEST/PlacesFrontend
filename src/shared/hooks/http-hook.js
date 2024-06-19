import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCntrll = new AbortController();
      activeHttpRequests.current.push(httpAbortCntrll);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCntrll.signal,
        });
        const responseData = await response.json();

        // remove contl if req is finished
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCntl) => reqCntl !== httpAbortCntrll
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  ); // only runs once

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCntrl) => abortCntrl.abort);
    }; // when componenet unmounts
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
