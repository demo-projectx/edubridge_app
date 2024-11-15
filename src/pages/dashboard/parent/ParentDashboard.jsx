import React from "react";
import NotificationsList from "../../messageNotification/NotificationsList";
import MessageViewer from "../../messageNotification/MessageViewer";
import AttendanceAlerts from "./AttendanceAllerts";
import BehavioralIssues from "./BehavorialIssue";
import ChildProgress from "./ChildProgress";
import Messages from "./Messages";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { NotificationsActive, Email } from "@mui/icons-material";

const notificationsList = [
  {
    message: "Your child, Felicia, missed a class on 10/27",
    timestamp: "2024-10-27 11:00 AM",
    type: "attendanceAlert",
  },
  {
    message: "Ama received a commendation for excellent performance in Math",
    timestamp: "2024-10-26 9:30 AM",
    type: "achievement",
  },
  {
    message: "Parent-Teacher meeting scheduled for 11/03 at 4:00 PM",
    timestamp: "2024-10-25 3:45 PM",
    type: "eventReminder",
  },
];

const ParentDashboard = () => {
  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", p: 4 }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "green", mb: 2 }}
      >
        Parent Dashboard
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "gray", mb: 4 }}>
        Track your child’s academic performance, behavioral issues, and
        attendance.
      </Typography>

      <Grid container spacing={4}>
        {/* Notifications Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              "&:hover": { boxShadow: 6 },
              p: 2,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <NotificationsActive
                  sx={{ fontSize: 40, color: "green", mr: 2 }}
                />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "green" }}
                >
                  Notifications
                </Typography>
              </Box>
              <NotificationsList notifications={notificationsList} />
            </CardContent>
          </Card>
        </Grid>

        {/* Messages Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              "&:hover": { boxShadow: 6 },
              p: 2,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ fontSize: 40, color: "green", mr: 2 }} />
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "green" }}
                >
                  Messages from Teachers
                </Typography>
              </Box>
              <MessageViewer />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ParentDashboard;
