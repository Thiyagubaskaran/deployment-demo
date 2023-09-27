const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3002;

// MongoDB connection URL and database name
const url = "mongodb://localhost:27017";
const dbName = "jcb";
const collectionName = "datas";

// Connect to MongoDB using Mongoose
mongoose
  .connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a Mongoose schema for the form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a Mongoose model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

// Middleware to parse JSON data
app.use(express.json());

// Handle POST request for form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Create a new Contact document
  const newContact = new Contact({
    name,
    email,
    message,
  });

  // Save the document to the database
  newContact
    .save()
    .then(() => {
      res.status(200).json({ message: "Form data saved successfully" });
    })
    .catch((error) => {
      console.error("Error saving form data:", error);
      res
        .status(500)
        .json({ message: "An error occurred while saving the form data" });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
