import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
} from "@mui/material";
import { CheckCircle, Info, Alarm } from "@mui/icons-material";
import { format, isToday, isThisWeek, isThisMonth, parseISO } from "date-fns";

const PendingTasks = () => {
  const initialTasks = [
    {
      id: 1,
      title: "Grade Assignments",
      deadline: "2024-11-14",
      description: "Review assignments for Class 5.",
    },
    {
      id: 2,
      title: "Science Project",
      deadline: "2024-11-18",
      description: "Prepare materials for science project.",
    },
    {
      id: 3,
      title: "Progress Report",
      deadline: "2024-12-10",
      description: "Submit student progress reports.",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("deadline");

  // Apply filtering based on selected filter
  const applyFilter = (tasks) => {
    return tasks.filter((task) => {
      const deadline = parseISO(task.deadline);
      if (filter === "Today") return isToday(deadline);
      if (filter === "This Week") return isThisWeek(deadline);
      if (filter === "This Month") return isThisMonth(deadline);
      return true; // "All"
    });
  };

  // Apply sorting based on selected criteria
  const applySort = (tasks) => {
    return [...tasks].sort((a, b) => {
      if (sortBy === "deadline")
        return new Date(a.deadline) - new Date(b.deadline);
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  // Update tasks when filter or sort changes
  useEffect(() => {
    const filtered = applyFilter(tasks);
    const sorted = applySort(filtered);
    setFilteredTasks(sorted);
  }, [filter, sortBy, tasks]);

  const handleComplete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleOpenDialog = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#4CAF50", fontWeight: "bold" }}
      >
        Pending Tasks
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Manage and track your outstanding tasks.
      </Typography>

      {/* Filters and Sorting */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1">Filter by:</Typography>
          <Select
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
            <MenuItem value="This Month">This Month</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="subtitle1">Sort by:</Typography>
          <Select
            fullWidth
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="deadline">Deadline</MenuItem>
            <MenuItem value="alphabetical">Alphabetical</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              {filteredTasks.length === 0 ? (
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: "#2E7D32", fontWeight: "bold" }}
                >
                  No pending tasks! Great job!
                </Typography>
              ) : (
                <List>
                  {filteredTasks.map((task) => (
                    <ListItem
                      key={task.id}
                      divider
                      sx={{ bgcolor: "#E8F5E9", borderRadius: 1, mb: 2 }}
                    >
                      <ListItemText
                        primary={task.title}
                        secondary={`Deadline: ${format(
                          parseISO(task.deadline),
                          "MMMM d, yyyy"
                        )}`}
                      />
                      {isToday(parseISO(task.deadline)) && (
                        <Chip
                          icon={<Alarm />}
                          label="Due Today"
                          color="error"
                          sx={{ ml: 2 }}
                        />
                      )}
                      <ListItemSecondaryAction>
                        <Tooltip title="View Details">
                          <IconButton
                            edge="end"
                            color="primary"
                            onClick={() => handleOpenDialog(task)}
                          >
                            <Info />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Mark as Complete">
                          <IconButton
                            edge="end"
                            color="success"
                            onClick={() => handleComplete(task.id)}
                          >
                            <CheckCircle />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Task Details Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>{selectedTask?.title}</strong>
          </DialogContentText>
          <DialogContentText sx={{ mt: 1 }}>
            <strong>Deadline:</strong>{" "}
            {format(parseISO(selectedTask?.deadline), "MMMM d, yyyy")}
          </DialogContentText>
          <DialogContentText sx={{ mt: 2 }}>
            <strong>Description:</strong> {selectedTask?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PendingTasks;
