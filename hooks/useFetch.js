import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(`${url}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5YmI3NThiLTZkYjAtNGNlNC04MWU4LWRkYTY2YjQ5NmEyOCIsImVtYWlsIjoia2VubnlAeW9wbWFpbC5jb20iLCJ1c2VybmFtZSI6ImtlaGluZGUiLCJkaXNwbGF5TmFtZSI6ImtlaGluZGUiLCJyb2xlIjoidXNlciIsInNlc3Npb25Ub2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqTTVZbUkzTlRoaUxUWmtZakF0TkdObE5DMDRNV1U0TFdSa1lUWTJZalE1Tm1FeU9DSXNJbVZ0WVdsc0lqb2lhMlZ1Ym5sQWVXOXdiV0ZwYkM1amIyMGlMQ0oxYzJWeWJtRnRaU0k2SW10bGFHbHVaR1VpTENKa2FYTndiR0Y1VG1GdFpTSTZJbXRsYUdsdVpHVWlMQ0p5YjJ4bElqb2lkWE5sY2lJc0luUnZhMlZ1Vkhsd1pTSTZJbE5sYzNOcGIyNVViMnRsYmlJc0ltbGhkQ0k2TVRZek9UZzBPVFEyTnl3aVpYaHdJam94TmpReU5EUXhORFkzZlEuaUtFbTRMVHV5VlJBZlk0eVhOU1ZSUzZRbEdsT2plWkc5bU9mdFdKcXo1ayIsInRva2VuVHlwZSI6IkF1dGhUb2tlbiIsImlhdCI6MTYzOTg0OTQ2NywiZXhwIjoxNjUwNjQ5NDY3fQ.jIs12X14pOSfvPN52ppAX0PU-urj_olchulyeZWoek4",
          },
        });
        const data = await response.json();
        cache.current[url] = data; // set response in cache;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return [status, data];
};
