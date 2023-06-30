import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Rating,
  Box,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the feedback in the database or perform necessary actions
    setSubmitted(true);
  };

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const handleEdit = () => {
    setSubmitted(false);
    // Clear the form fields or fetch the existing feedback data to populate the fields
    setName("");
    setEmail("");
    setRating(0);
    setComment("");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Traya Feedback
      </Typography>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Box mb={3}>
            <Typography>Rating:</Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => handleRatingChange(newValue)}
              precision={3}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </Box>
          <TextField
            id="comment"
            label="Comment"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      ) : (
        <div>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Thank you for your feedback!
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Your feedback has been successfully submitted.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit Feedback
          </Button>
        </div>
      )}
    </Container>
  );
};

export default FeedbackForm;
