import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "Mr. Smith",
      content: "Your child has been performing excellently in mathematics.",
      date: "2024-11-10",
    },
    {
      id: 2,
      from: "Ms. Johnson",
      content: "Your child missed a class yesterday.",
      date: "2024-11-12",
    },
    {
      id: 3,
      from: "Mr. White",
      content:
        "Please ensure your child completes the science project due next week.",
      date: "2024-11-08",
    },
    {
      id: 4,
      from: "Ms. Carter",
      content:
        "Your child demonstrated great teamwork during the group activity.",
      date: "2024-11-05",
    },
    {
      id: 5,
      from: "Mr. Smith",
      content: "Kindly review the latest homework submission.",
      date: "2024-11-03",
    },
    {
      id: 6,
      from: "Ms. Johnson",
      content: "Can we schedule a meeting to discuss class performance?",
      date: "2024-11-01",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          from: "You",
          content: newMessage,
          date: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewMessage(""); // Clear input field
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        maxWidth: "1000px",
        mx: "auto",
        mt: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#4CAF50", fontWeight: "bold", mb: 3 }}
      >
        Messages
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        sx={{ mb: 3 }}
      >
        View and respond to messages from your child’s teachers.
      </Typography>

      {/* Messages List in Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {messages.length === 0 ? (
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "#2E7D32", fontWeight: "bold" }}
          >
            No messages yet!
          </Typography>
        ) : (
          messages.map((message) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={message.id}
            >
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: message.from === "You" ? "#E8F5E9" : "#E3F2FD",
                }}
                elevation={1}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    color: message.from === "You" ? "#388E3C" : "#1565C0",
                  }}
                >
                  {message.from}:
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {message.content}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mt: 2 }}
                >
                  {message.date}
                </Typography>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>

      {/* Message Input */}
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#fff",
          p: 2,
          borderRadius: 2,
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#4CAF50",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Send a Message to Teachers
        </Typography>
        <TextField
          multiline
          rows={4}
          placeholder="Write your message here..."
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<Send />}
          onClick={handleSendMessage}
          sx={{
            bgcolor: "#4CAF50",
            color: "#fff",
            "&:hover": { bgcolor: "#388E3C" },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Messages;
