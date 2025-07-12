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
    const matchedRepo = RepoState.filter((ele) => ele.id === RepoId);
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
          <h2>{repo[0]?.full_name}</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Typography>{repo[0]?.description}</Typography>
        <Typography>📝 Language(s): {repo[0]?.language}</Typography>
        <Typography>🍴 Forks: {repo[0]?.forks_count}</Typography>
        <Typography>🐞 Open Issues: {repo[0]?.open_issues_count}</Typography>
        <Typography>👀 Watchers: {repo[0]?.watchers_count}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          href={repo[0]?.html_url}
          target="_blank"
        >
          View on Github
        </Button>
      </Box>
    </Modal>
  );
}

export default RepoModal;
