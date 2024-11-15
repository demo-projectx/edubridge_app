import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Select,
  MenuItem,
  Grid,
  Tooltip,
} from "@mui/material";
import { CheckCircle, NotificationsActive, Star } from "@mui/icons-material";

const Notifications = () => {
  const initialNotifications = [
    {
      id: 1,
      title: "New Assignment Submission",
      message: "A student has submitted an assignment.",
      date: "2024-11-12",
      important: true,
      read: false,
    },
    {
      id: 2,
      title: "Weekly Progress Report Due",
      message: "Remember to submit weekly progress reports.",
      date: "2024-11-10",
      important: false,
      read: false,
    },
    {
      id: 3,
      title: "School Meeting",
      message: "Upcoming staff meeting on Friday at 10:00 AM.",
      date: "2024-11-09",
      important: true,
      read: true,
    },
    {
      id: 4,
      title: "Parent-Teacher Conference",
      message: "Conference scheduled for next week.",
      date: "2024-11-08",
      important: false,
      read: true,
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("All");

  // Filter notifications
  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "All") return true;
    if (filter === "Unread") return !notification.read;
    if (filter === "Important") return notification.important;
    return true;
  });

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#4CAF50", fontWeight: "bold", mb: 2 }}
      >
        Notifications
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Stay updated with the latest announcements and alerts.
      </Typography>

      {/* Filter Selection */}
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1">Filter Notifications:</Typography>
          <Select
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unread">Unread</MenuItem>
            <MenuItem value="Important">Important</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Notification List */}
      <Box sx={{ mt: 4 }}>
        <List>
          {filteredNotifications.length === 0 ? (
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#2E7D32", fontWeight: "bold" }}
            >
              No notifications found!
            </Typography>
          ) : (
            filteredNotifications.map((notification) => (
              <ListItem
                key={notification.id}
                sx={{
                  bgcolor: notification.read ? "#E8F5E9" : "#C8E6C9",
                  borderRadius: 1,
                  mb: 2,
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: notification.read ? "normal" : "bold" }}
                    >
                      {notification.title}
                      {notification.important && (
                        <Tooltip title="Important">
                          <Star color="error" sx={{ ml: 1, fontSize: 20 }} />
                        </Tooltip>
                      )}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2">
                        {notification.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {notification.date}
                      </Typography>
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  {!notification.read && (
                    <Tooltip title="Mark as Read">
                      <IconButton
                        edge="end"
                        color="success"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <CheckCircle />
                      </IconButton>
                    </Tooltip>
                  )}
                  {notification.important && (
                    <Tooltip title="Important Notification">
                      <Chip
                        icon={<NotificationsActive />}
                        label="Important"
                        color="secondary"
                        sx={{ ml: 1 }}
                      />
                    </Tooltip>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Notifications;
