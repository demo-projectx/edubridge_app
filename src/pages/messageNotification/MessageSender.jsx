import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MessageSender = () => {
  const [message, setMessage] = useState("");
  const [parent, setParent] = useState("");

  const sendMessage = () => {
    if (parent.trim() === "" || message.trim() === "") {
      toast.error("Both parent name and message are required!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    // Simulate message sending
    const isMessageSent = true; // Change to false to test error

    if (isMessageSent) {
      toast.success(`Message sent to ${parent} successfully!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setMessage(""); // Clear message field
      setParent(""); // Clear parent field
    } else {
      toast.error("Failed to send message. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Box>
      <ToastContainer />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Send a Message
      </Typography>
      <TextField
        label="Parent Name"
        variant="outlined"
        fullWidth
        value={parent}
        onChange={(e) => setParent(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Your Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        sx={{
          backgroundColor: "green",
          "&:hover": { backgroundColor: "darkgreen" },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default MessageSender;
