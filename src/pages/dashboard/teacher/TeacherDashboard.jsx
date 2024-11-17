import React from "react";
import TeacherNotificationsList from "../../messageNotification/TeacherNotificationList";
import MessageSender from "../../messageNotification/MessageSender";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Message, NotificationsActive } from "@mui/icons-material";

// Sample data for teacher notifications
const teacherNotifications = [
  {
    message: "Student Talata missed class",
    timestamp: "2024-10-28 10:30 AM",
    type: "StudentAlert",
  },
  {
    message: "Assignment 3 submission is pending for review",
    timestamp: "2024-10-27 9:00 AM",
    type: "taskReminder",
  },
  {
    message: "New message from Parent of Edem",
    timestamp: "2024-10-26 2:15 PM",
    type: "ParentMessage",
  },
];

const TeacherDashboard = () => {
  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", p: 4 }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "green",
          mb: 2,
          textAlign: "center",
        }}
      >
        Teacher Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Notifications Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "0px 4px 10px rgba(0, 128, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 6px 15px rgba(0, 128, 0, 0.3)",
              },
              p: 3,
              background: "linear-gradient(145deg, #f0f9f1, #e6f7e7)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  borderBottom: "2px solid green",
                  pb: 1,
                }}
              >
                <NotificationsActive
                  sx={{ fontSize: 45, color: "green", mr: 2 }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "green" }}
                >
                  Notifications
                </Typography>
              </Box>
              <TeacherNotificationsList notifications={teacherNotifications} />
            </CardContent>
          </Card>
        </Grid>

        {/* Message Parents Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: "0px 4px 10px rgba(0, 128, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 6px 15px rgba(0, 128, 0, 0.3)",
              },
              p: 3,
              background: "linear-gradient(145deg, #f9f7f0, #f7f3e6)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 3,
                  borderBottom: "2px solid green",
                  pb: 1,
                }}
              >
                <Message sx={{ fontSize: 45, color: "green", mr: 2 }} />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "green" }}
                >
                  Message Parents
                </Typography>
              </Box>
              <MessageSender />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeacherDashboard;
