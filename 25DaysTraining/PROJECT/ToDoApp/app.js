const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.set("view engine", "ejs"); // Set EJS as the view engine
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Enable form submission
app.use(cors());
app.use(express.static("public")); // Serve static files like CSS

let tasks = [];

// Get all tasks and render the EJS view
app.get("/", (req, res) => {
  res.render("list", { tasks });
});

// API: Get tasks as JSON
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Task text is required" });
  }
  const newTask = { text, completed: false };
  tasks.push(newTask);
  res.redirect("/");
});

// Edit a task
app.post("/tasks/edit/:index", (req, res) => {
  const { index } = req.params;
  const { text } = req.body;
  if (!tasks[index]) {
    return res.status(404).json({ error: "Task not found" });
  }
  tasks[index].text = text;
  res.redirect("/");
});

// Toggle task completion
app.post("/tasks/toggle/:index", (req, res) => {
  const { index } = req.params;
  if (!tasks[index]) {
    return res.status(404).json({ error: "Task not found" });
  }
  tasks[index].completed = !tasks[index].completed;
  res.redirect("/");
});

// Delete a task
app.post("/tasks/delete/:index", (req, res) => {
  const { index } = req.params;
  if (!tasks[index]) {
    return res.status(404).json({ error: "Task not found" });
  }
  tasks.splice(index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
