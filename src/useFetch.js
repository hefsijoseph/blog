import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useeefect for fetching data
  useEffect(() => {
    // use of abortController
    // is to associate with fetch request
    // so that to abort fetch when user go to first page
    // then before the  first complete
    // then goes to another page
    // then stop the fetch with abort
    const abortCont = new AbortController();

    // settimeout function that runs
    //  after certain amount of time
    // fetch performed after wait for 3000ms
    setTimeout(() => {
      // associate fetch with abort
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            // error when resource does not exist
            throw Error("could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
          console.log(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // catch error for network
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 3000);

    // abort / unmount component when user
    // click this component then before this component
    // complete then  go to another component page
    // pause the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
