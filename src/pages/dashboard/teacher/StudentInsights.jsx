import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";

const StudentInsights = () => {
  // Sample data for demonstration
  const students = ["John Doe", "Jane Smith", "Michael Brown"];
  const subjects = ["Mathematics", "Science", "English", "History"];

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [gradesData, setGradesData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Event Handlers
  const handleStudentChange = (event) => setSelectedStudent(event.target.value);
  const handleSubjectChange = (event) => setSelectedSubject(event.target.value);
  const handleGradeChange = (event) => setGrade(event.target.value);

  const addGrade = () => {
    if (selectedStudent && selectedSubject && grade) {
      setGradesData((prevData) => [
        ...prevData,
        { student: selectedStudent, subject: selectedSubject, grade },
      ]);
      setGrade("");
      setSelectedSubject("");
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#4CAF50", fontWeight: "bold" }}
      >
        Student Insights
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        View and manage student performance and grades.
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {/* Student Selector */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#2E7D32", fontWeight: "bold" }}
              >
                Select Student and Enter Grade
              </Typography>
              <Select
                value={selectedStudent}
                onChange={handleStudentChange}
                displayEmpty
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              >
                <MenuItem value="" disabled>
                  Select Student
                </MenuItem>
                {students.map((student, index) => (
                  <MenuItem key={index} value={student}>
                    {student}
                  </MenuItem>
                ))}
              </Select>
              <Select
                value={selectedSubject}
                onChange={handleSubjectChange}
                displayEmpty
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
              >
                <MenuItem value="" disabled>
                  Select Subject
                </MenuItem>
                {subjects.map((subject, index) => (
                  <MenuItem key={index} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                value={grade}
                onChange={handleGradeChange}
                label="Grade"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={addGrade}
              >
                Add Grade
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Grades Table */}
        <Grid item xs={12} md={10}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#2E7D32", fontWeight: "bold" }}
              >
                Grade Records
              </Typography>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 200,
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <TableContainer component={Paper}>
                  <Table aria-label="grades table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            backgroundColor: "#E8F5E9",
                          }}
                        >
                          Student
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            backgroundColor: "#E8F5E9",
                          }}
                        >
                          Subject
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            backgroundColor: "#E8F5E9",
                          }}
                        >
                          Grade
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {gradesData.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell align="center">{row.student}</TableCell>
                          <TableCell align="center">{row.subject}</TableCell>
                          <TableCell align="center">{row.grade}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentInsights;
