import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [Repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const res = await fetch("https://api.github.com/orgs/godaddy/repos");
      const data = await res.json();
      setRepos(data);
    } catch (error) {
      alert("Please try again after sometime!");
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <ApiContext.Provider value={Repos}>{props.children}</ApiContext.Provider>
  );
};
