import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tooltip,
} from "@mui/material";
import {
  Star,
  CheckCircle,
  Email,
  Feedback,
  NotificationsActive,
} from "@mui/icons-material";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Assignment Submission",
      message: "A student has submitted an assignment for review.",
      date: "2024-11-12",
      type: "event",
      important: true,
    },
    {
      id: 2,
      title: "Message from Parent",
      message:
        "Parent of John Doe: I would like to discuss his recent performance in class.",
      date: "2024-11-11",
      type: "parentMessage",
      important: false,
    },
    {
      id: 3,
      title: "Student Feedback Received",
      message:
        "Student: I really enjoyed the interactive learning activities in class today!",
      date: "2024-11-10",
      type: "feedback",
      important: false,
    },
    {
      id: 4,
      title: "Weekly Progress Report Reminder",
      message: "Remember to submit your weekly progress reports.",
      date: "2024-11-09",
      type: "event",
      important: false,
    },
    {
      id: 5,
      title: "School Meeting Reminder",
      message: "There is an upcoming staff meeting on Friday at 10:00 AM.",
      date: "2024-11-08",
      type: "event",
      important: true,
    },
    {
      id: 6,
      title: "Parent-Teacher Conference",
      message: "Conference scheduled for next week. Please prepare reports.",
      date: "2024-11-07",
      type: "parentMessage",
      important: false,
    },
    {
      id: 7,
      title: "Positive Feedback on Assignment",
      message: "Student: The recent assignment was very insightful.",
      date: "2024-11-06",
      type: "feedback",
      important: false,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        p: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Sidebar Spacer */}
      <Box sx={{ flex: "0 0 50px" }}></Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "1200px",
          mx: "auto",
          p: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#4CAF50", fontWeight: "bold", mb: 2 }}
        >
          Notifications
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Explore all important updates, feedback, and messages in an organized
          way.
        </Typography>

        {/* Notification Grid */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {/* Render Notifications */}
          {notifications.map((notification) => (
            <Grid item xs={12} sm={6} md={4} key={notification.id}>
              <NotificationCard notification={notification} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const NotificationCard = ({ notification }) => {
  return (
    <Card
      sx={{
        bgcolor: notification.important ? "#FFF3E0" : "#F1F8E9",
        borderRadius: 2,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {notification.title}
          {notification.important && (
            <Tooltip title="Important">
              <Star color="error" />
            </Tooltip>
          )}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, mb: 2, color: "text.secondary" }}
        >
          {notification.message}
        </Typography>
        <Chip
          label={getChipLabel(notification.type)}
          color={getChipColor(notification.type)}
          icon={getChipIcon(notification.type)}
          sx={{ mt: 1 }}
        />
        <Typography
          variant="caption"
          display="block"
          sx={{ mt: 1, color: "text.secondary" }}
        >
          {notification.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          startIcon={<CheckCircle />}
          sx={{ color: "#4CAF50", fontWeight: "bold" }}
        >
          Mark as Read
        </Button>
      </CardActions>
    </Card>
  );
};

// Helper functions for Chips
const getChipLabel = (type) => {
  switch (type) {
    case "event":
      return "Event";
    case "feedback":
      return "Feedback";
    case "parentMessage":
      return "Parent Message";
    default:
      return "General";
  }
};

const getChipColor = (type) => {
  switch (type) {
    case "event":
      return "primary";
    case "feedback":
      return "secondary";
    case "parentMessage":
      return "default";
    default:
      return "default";
  }
};

const getChipIcon = (type) => {
  switch (type) {
    case "event":
      return <NotificationsActive />;
    case "feedback":
      return <Feedback />;
    case "parentMessage":
      return <Email />;
    default:
      return <NotificationsActive />;
  }
};

export default Notifications;
