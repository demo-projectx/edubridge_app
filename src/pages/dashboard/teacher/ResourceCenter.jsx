import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  PictureAsPdf,
  VideoLibrary,
  Link as LinkIcon,
  Search,
} from "@mui/icons-material";

const ResourceCenter1 = () => {
  // Sample resources data
  const resourcesData = [
    {
      id: 1,
      title: "Math Curriculum Guide",
      type: "Document",
      description: "A comprehensive guide to the math curriculum.",
      link: "/resources/math-guide.pdf",
    },
    {
      id: 2,
      title: "Science Lab Safety Tutorial",
      type: "Video",
      description: "An instructional video on lab safety protocols.",
      link: "/resources/science-lab-safety.mp4",
    },
    {
      id: 3,
      title: "Educational Websites for Students",
      type: "Link",
      description: "A curated list of educational websites.",
      link: "https://education.com/resources",
    },
    {
      id: 4,
      title: "Physics Lesson Plan",
      type: "Document",
      description: "Lesson plan covering fundamental physics concepts.",
      link: "/resources/physics-lesson.pdf",
    },
  ];

  const [resources, setResources] = useState(resourcesData);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and search function
  const filteredResources = resources.filter((resource) => {
    const matchesFilter = filter === "All" || resource.type === filter;
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Box sx={{ p: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#4CAF50", fontWeight: "bold", mb: 2 }}
      >
        Resource Center
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Access a variety of resources to support teaching and student
        development.
      </Typography>

      {/* Search and Filter Controls */}
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Search Resources"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <Search position="start" sx={{ color: "gray" }} />
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Document">Documents</MenuItem>
            <MenuItem value="Video">Videos</MenuItem>
            <MenuItem value="Link">Links</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Resource List */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {filteredResources.length === 0 ? (
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "#2E7D32", fontWeight: "bold", mt: 4 }}
          >
            No resources found!
          </Typography>
        ) : (
          filteredResources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} key={resource.id}>
              <Card
                sx={{
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {resource.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {resource.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title={`View ${resource.type}`}>
                    <IconButton
                      component="a"
                      href={resource.link}
                      target="_blank"
                      color="primary"
                    >
                      {resource.type === "Document" && <PictureAsPdf />}
                      {resource.type === "Video" && <VideoLibrary />}
                      {resource.type === "Link" && <LinkIcon />}
                    </IconButton>
                  </Tooltip>
                  <Button
                    variant="outlined"
                    color="success"
                    href={resource.link}
                    target="_blank"
                    sx={{ ml: "auto" }}
                  >
                    {resource.type === "Document" ? "Download" : "View"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ResourceCenter1;
