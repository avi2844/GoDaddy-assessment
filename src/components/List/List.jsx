import { Box } from "@mui/material";
import React from "react";
import styles from './List.module.css'

function List({repoName, description, id, onClick}){
    return(
        <Box className={styles.mainContainer} onClick={()=>onClick(id)}> 
            <h2>{repoName}</h2>
            <span>{description}</span>
        </Box>
    )
}

export default List;