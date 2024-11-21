import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Button,
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

//  
//   <Box
//     sx={{
//       width: 240,
//       flexShrink: 0,
//       backgroundColor: "#4CAF50",
//       color: "white",
//       p: 2,
//       minHeight: "100vh",
//     }}
//   >
//     <Typography variant="h5" gutterBottom>
//       Dashboard
//     </Typography>
//     <Typography variant="body2">Links or Menu</Typography>
//   </Box>
// );

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
      deadline: null,
      description: "Submit student progress reports.",
    },
    {
      id: 4,
      title: "Plan Parent-Teacher Meeting",
      deadline: "2024-11-20",
      description: "Coordinate schedules and prepare the agenda.",
    },
    {
      id: 5,
      title: "Finalize Exam Papers",
      deadline: "2024-11-22",
      description: "Submit exam papers for review and printing.",
    },
    {
      id: 6,
      title: "Organize Classroom Supplies",
      deadline: "2024-11-25",
      description: "Order and arrange classroom supplies for next term.",
    },
    {
      id: 7,
      title: "Weekly Attendance Report",
      deadline: "2024-11-26",
      description: "Compile and submit weekly attendance.",
    },
    {
      id: 8,
      title: "Update Class Curriculum",
      deadline: "2024-11-30",
      description: "Make adjustments to the curriculum for the next semester.",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("deadline");

  const applyFilter = (tasks) => {
    return tasks.filter((task) => {
      if (!task.deadline) return false;
      const deadline = parseISO(task.deadline);
      if (filter === "Today") return isToday(deadline);
      if (filter === "This Week") return isThisWeek(deadline);
      if (filter === "This Month") return isThisMonth(deadline);
      return true;
    });
  };

  const applySort = (tasks) => {
    return [...tasks].sort((a, b) => {
      if (sortBy === "deadline")
        return new Date(a.deadline || 0) - new Date(b.deadline || 0);
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      return 0;
    });
  };

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
    <Box
      sx={{ flexGrow: 1, p: 4, backgroundColor: "#f7f7f7", overflow: "auto" }}
    >
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
        <Grid item xs={12} sm={5} md={4}>
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
        <Grid item xs={12} sm={5} md={4}>
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

      {/* Task Cards */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        {filteredTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card
              sx={{
                p: 1,
                bgcolor: "#E8F5E9",
                borderRadius: 1,
                boxShadow: 2,
                "&:hover": { transform: "scale(1.01)", boxShadow: 4 },
                transition: "all 0.15s ease-in-out",
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {task.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {task.deadline
                    ? `Deadline: ${format(
                        parseISO(task.deadline),
                        "MMMM d, yyyy"
                      )}`
                    : "No deadline provided"}
                </Typography>
                {task.deadline && isToday(parseISO(task.deadline)) && (
                  <Chip
                    icon={<Alarm />}
                    label="Due Today"
                    color="error"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                )}
              </CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", px: 1 }}
              >
                <Tooltip title="View Details">
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenDialog(task)}
                  >
                    <Info />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Mark as Complete">
                  <IconButton
                    color="success"
                    onClick={() => handleComplete(task.id)}
                  >
                    <CheckCircle />
                  </IconButton>
                </Tooltip>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Task Details Dialog */}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <strong>{selectedTask?.title}</strong>
          </DialogContentText>
          {selectedTask?.deadline && (
            <DialogContentText sx={{ mt: 1 }}>
              <strong>Deadline:</strong>{" "}
              {format(parseISO(selectedTask.deadline), "MMMM d, yyyy")}
            </DialogContentText>
          )}
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

const App = () => (
  <Box sx={{ display: "flex" }}>
    {/* <Sidebar /> */}
    <PendingTasks />
  </Box>
);

export default App;
