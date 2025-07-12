import React from "react";
import NavBar from "../NavBar/NavBar";
import { useContext, useState } from "react";
import { Stack } from "@mui/material";
import { ApiContext } from "../../contexts/ApiContext";
import List from "../List/List";
import styles from "./Home.module.css";
import RepoModal from "../RepoModal/RepoModal";

function Home() {
  const RepoState = useContext(ApiContext);

  const [open, setOpen] = useState(false);
  const [selectedRepoId, setSelectedRepoId] = useState(null);

  const handleOpen = (id) => {
    setSelectedRepoId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRepoId(null);
  };

  return (
    <>
      <NavBar />
      <Stack spacing={2} sx={{ padding: "10px", paddingTop: "55px" }}>
        {RepoState.map((ele) => (
          <List key={ele.id} repoName={ele.full_name} description={ele.description} id={ele.id} onClick={handleOpen}/>
        ))}
      </Stack>

      <RepoModal open={open} handleClose={handleClose} RepoId={selectedRepoId} />
    </>
  );
}

export default Home;
