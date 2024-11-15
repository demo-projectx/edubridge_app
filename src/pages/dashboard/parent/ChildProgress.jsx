import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChildProgress = () => {
  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState([]);
  const [termData, setTermData] = useState([]);
  const [subjectsData, setSubjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const monthlyData = [
        { month: "Jan", score: 85 },
        { month: "Feb", score: 88 },
        { month: "Mar", score: 82 },
        { month: "Apr", score: 91 },
        { month: "May", score: 87 },
        { month: "Jun", score: 90 },
        { month: "Jul", score: 93 },
        { month: "Aug", score: 88 },
        { month: "Sep", score: 89 },
        { month: "Oct", score: 92 },
        { month: "Nov", score: 90 },
        { month: "Dec", score: 94 },
      ];

      const termData = [
        { term: "Term 1", averageScore: 85 },
        { term: "Term 2", averageScore: 88 },
        { term: "Term 3", averageScore: 92 },
      ];

      const subjects = [
        { subject: "Mathematics", grade: "A", position: 1 },
        { subject: "English", grade: "B", position: 2 },
        { subject: "Science", grade: "A", position: 1 },
        { subject: "Social Studies", grade: "B", position: 3 },
      ];

      setProgressData(monthlyData);
      setTermData(termData);
      setSubjectsData(subjects);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ color: "#4CAF50", fontWeight: "bold" }}
      >
        Child's Academic Progress
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        This page provides a monthly overview of the academic performance and
        term performance history.
      </Typography>

      {/* Subject Grades and Positions Table */}
      <Grid container justifyContent="center" spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "#2E7D32", fontWeight: "bold" }}
              >
                Subject Grades and Positions
              </Typography>
              <TableContainer component={Paper}>
                <Table stickyHeader aria-label="subject grades and positions">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E8F5E9",
                        }}
                      >
                        Subject
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E8F5E9",
                        }}
                      >
                        Grade
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E8F5E9",
                        }}
                      >
                        Position
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {subjectsData.map((row, index) => (
                      <TableRow key={index} hover>
                        <TableCell align="left">{row.subject}</TableCell>
                        <TableCell align="center">{row.grade}</TableCell>
                        <TableCell align="center">{row.position}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center">
        {/* Monthly Performance Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "#2E7D32", fontWeight: "bold" }}
              >
                Monthly Performance Chart
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#4CAF50"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Term Performance Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "#2E7D32", fontWeight: "bold" }}
              >
                Term Performance History
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={termData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="term" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="averageScore"
                    stroke="#FF9800"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChildProgress;
