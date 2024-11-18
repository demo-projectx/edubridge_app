import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Grid,
  Tooltip,
} from "@mui/material";
import { Warning, CheckCircle, TrendingUp, Info } from "@mui/icons-material";

const BehavioralIssues = () => {
  const [issues, setIssues] = useState([
    {
      id: 1,
      date: "2023-10-01",
      description: "Skipping class without permission.",
      severity: "High",
      resolved: false,
    },
    {
      id: 2,
      date: "2023-10-05",
      description: "Improved classroom behavior observed.",
      severity: "Positive",
      resolved: true,
    },
    {
      id: 3,
      date: "2023-11-01",
      description: "Distracting others during lessons.",
      severity: "Moderate",
      resolved: false,
    },
    {
      id: 4,
      date: "2023-11-05",
      description: "Participated actively in group discussions.",
      severity: "Positive",
      resolved: true,
    },
    {
      id: 5,
      date: "2023-11-08",
      description: "Late submission of homework.",
      severity: "Moderate",
      resolved: false,
    },
    {
      id: 6,
      date: "2023-11-10",
      description: "Consistently helping peers with assignments.",
      severity: "Positive",
      resolved: true,
    },
  ]);

  // Resolve an issue
  const markAsResolved = (id) => {
    setIssues(
      issues.map((issue) =>
        issue.id === id ? { ...issue, resolved: true } : issue
      )
    );
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        maxWidth: "1200px",
        mx: "auto",
        mt: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#4CAF50", fontWeight: "bold", mb: 2 }}
      >
        Behavioral Issues
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Monitor your child’s behavioral progress and address any concerns.
      </Typography>

      {/* Logs */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {issues.map((issue) => (
          <Grid item xs={12} sm={6} md={4} key={issue.id}>
            <Card
              sx={{
                borderLeft: `5px solid ${
                  issue.severity === "High"
                    ? "#FF7043"
                    : issue.severity === "Moderate"
                    ? "#FFB74D"
                    : "#4CAF50"
                }`,
                bgcolor: issue.resolved ? "#E8F5E9" : "#FFEBEE",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {issue.description}
                  {issue.severity === "High" && (
                    <Tooltip title="High Severity">
                      <Warning color="error" sx={{ ml: 1 }} />
                    </Tooltip>
                  )}
                  {issue.severity === "Moderate" && (
                    <Tooltip title="Moderate Severity">
                      <Info color="warning" sx={{ ml: 1 }} />
                    </Tooltip>
                  )}
                  {issue.severity === "Positive" && (
                    <Tooltip title="Positive Feedback">
                      <TrendingUp color="success" sx={{ ml: 1 }} />
                    </Tooltip>
                  )}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  Date: {issue.date}
                </Typography>
                {issue.resolved && (
                  <Chip
                    label="Resolved"
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                    icon={<CheckCircle />}
                  />
                )}
              </CardContent>
              {!issue.resolved && (
                <CardActions>
                  <Button
                    size="small"
                    startIcon={<CheckCircle />}
                    sx={{ color: "#4CAF50", fontWeight: "bold" }}
                    onClick={() => markAsResolved(issue.id)}
                  >
                    Mark as Resolved
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BehavioralIssues;
