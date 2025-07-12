import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./RepoModal.module.css";

function RepoModal({ open, handleClose, RepoId }) {
  const RepoState = useContext(ApiContext);

  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const matchedRepo = RepoState.find((ele) => ele.id === RepoId);
    setRepo(matchedRepo);
  }, [RepoId]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={styles.modalContainer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>{repo?.full_name}</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Typography>{repo?.description}</Typography>
        <Typography>📝 Language(s): {repo?.language}</Typography>
        <Typography>🍴 Forks: {repo?.forks_count}</Typography>
        <Typography>🐞 Open Issues: {repo?.open_issues_count}</Typography>
        <Typography>👀 Watchers: {repo?.watchers_count}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          href={repo?.html_url}
          target="_blank"
        >
          View on Github
        </Button>
      </Box>
    </Modal>
  );
}

export default RepoModal;
