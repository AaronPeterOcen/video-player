import React from "react";
import "./ControlIcons.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ControlIcons = () => {
  return (
    <div className="controls__div">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        style={{ padding: 16 }}
      >
        <Grid item>
          <Typography variant="h5" style={{ color: "white" }}>
            Player
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ControlIcons;
