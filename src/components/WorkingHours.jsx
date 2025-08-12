import React from "react";
import { Box, Paper, Typography, CircularProgress } from "@mui/material";

export default function WorkingHours() {
  const value = 70; // percentage

  return (
    <Paper sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Working Hours
      </Typography>

      <Box sx={{ position: "relative", display: "inline-flex", marginBottom: 1 }}>
        <CircularProgress
          variant="determinate"
          value={value}
          size={120}
          thickness={5}
          sx={{ color: "blue" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {value + "%"}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Working hours calculated based on your activity
      </Typography>
    </Paper>
    
  );
}
