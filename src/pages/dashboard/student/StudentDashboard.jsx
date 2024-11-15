import React from "react";
import Feedback from "./Feedback";
import Grades from "./Grades";
import GrowthMetrics from "./GrowthMetrics";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { Feedback as FeedbackIcon } from "@mui/icons-material";
import { MdOutlineGrade } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const StudentDashboard = () => {
  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", p: 3 }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ color: "green", fontWeight: "bold", mb: 2 }}
      >
        Student Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "gray", mb: 4 }}>
        Check your grades, feedback, and growth metrics.
      </Typography>

      {/* Dashboard Grid */}
      <Grid container spacing={4}>
        {/* Feedback */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <FeedbackIcon sx={{ fontSize: 50, color: "green", mb: 2 }} />
              <Typography
                variant="h5"
                sx={{ color: "green", fontWeight: "bold", mb: 1 }}
              >
                Feedback
              </Typography>
              <Typography variant="body1" sx={{ color: "gray" }}>
                View your recent feedback and suggestions from your teachers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Grades */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <MdOutlineGrade
                style={{ fontSize: 50, color: "green", marginBottom: 16 }}
              />
              <Typography
                variant="h5"
                sx={{ color: "green", fontWeight: "bold", mb: 1 }}
              >
                Grades
              </Typography>
              <Typography variant="body1" sx={{ color: "gray" }}>
                Access your latest grades and track your academic performance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Growth Metrics */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <FaChartLine
                style={{ fontSize: 50, color: "green", marginBottom: 16 }}
              />
              <Typography
                variant="h5"
                sx={{ color: "green", fontWeight: "bold", mb: 1 }}
              >
                Growth Metrics
              </Typography>
              <Typography variant="body1" sx={{ color: "gray" }}>
                Monitor your progress and personal growth over time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
