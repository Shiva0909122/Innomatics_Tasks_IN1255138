<!-- README.md -->
# DAY (1) HTML Tags and Usage Guide

## 1. HTML Favicon
A favicon is a small icon displayed on the browser tab of a webpage.

### Syntax:
```html
<head>
    <link rel="icon" type="image/png" href="favicon.png">
</head>
```

### Practical Use:
- Place the `favicon.png` file in the root directory of your project.
- Ensure the image is small (16x16px or 32x32px) for better compatibility.

---

## 2. HTML Emojis
Emojis can be added using Unicode character codes.

### Syntax:
```html
<p>&#128512; This is a smiling face emoji.</p>
```

### Practical Use:
- Useful for adding expressive symbols to websites.
- Can be used inside headings, paragraphs, buttons, and other elements.

---

## 3. HTML Structural Tags
Structural tags define the layout of a webpage.

### Common Structural Tags:
- `<header>`: Defines the header section.
- `<nav>`: Contains navigation links.
- `<section>`: Groups content into sections.
- `<article>`: Represents self-contained content.
- `<aside>`: Contains content related to the main content.
- `<footer>`: Defines the footer of a webpage.

### Example:
```html
<header>
    <h1>Welcome to My Website</h1>
</header>
<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
</nav>
<section>
    <h2>About Us</h2>
    <p>We provide web development tutorials.</p>
</section>
<footer>
    <p>&copy; 2025 MyWebsite</p>
</footer>
```

---

## 4. HTML Semantic Tags
Semantic tags improve readability and SEO by defining the purpose of elements.

### Common Semantic Tags:
- `<article>`: Self-contained content.
- `<aside>`: Side content like ads or links.
- `<details>`: Expandable content.
- `<figure>` & `<figcaption>`: For images with captions.
- `<mark>`: Highlights text.
- `<time>`: Represents a time or date.

### Example:
```html
<article>
    <h2>Latest News</h2>
    <p>This is an article about HTML.</p>
</article>
<figure>
    <img src="image.jpg" alt="Example Image">
    <figcaption>An example of using semantic tags.</figcaption>
</figure>
<mark>Highlighted Text</mark>
```

# <===================================================>

# DAY (2) Git and GitHub Learning Project

This repository is a learning resource for understanding **Git** and **GitHub**. It includes basic concepts of version control, Git commands, and GitHub workflows.

## 📌 Introduction
Git is a **distributed version control system** that helps developers track changes in their code, while GitHub is a **cloud-based hosting service** for Git repositories, enabling collaboration and project management.

## 🛠 Installation
Follow these steps to set up Git and clone this repository:

1. **Install Git** (if not installed):
   - Windows: Download from [git-scm.com](https://git-scm.com/)
   - macOS: Install via Homebrew: `brew install git`
   - Linux: Install using package manager: `sudo apt install git`

2. **Verify installation**:
   ```sh
   git --version
   ```

3. **Clone this repository**:
   ```sh
   git clone https://github.com/yourusername/repo-name.git
   ```

4. **Navigate to the project directory**:
   ```sh
   cd repo-name
   ```

## 🚀 Features
- Learn **Version Control System (VCS)** concepts
- Understand **Git** commands and workflows
- Explore **GitHub** for collaboration and repository management
- Work with **branches, commits, pull requests**, and more

## 🔥 Basic Git Commands
| Command | Description |
|---------|------------|
| `git init` | Initialize a Git repository |
| `git clone <repo-url>` | Clone an existing repository |
| `git status` | Check the status of changes |
| `git add <file>` | Stage changes for commit |
| `git commit -m "message"` | Commit changes with a message |
| `git push origin <branch>` | Push changes to a remote repository |
| `git pull origin <branch>` | Pull the latest changes |
| `git branch <branch-name>` | Create a new branch |
| `git checkout <branch-name>` | Switch to another branch |

# <===================================================>

# DAY (3) HTML Form Tags and Attributes

## Overview
HTML forms are used to collect user inputs. Forms contain various elements like input fields, radio buttons, checkboxes, and buttons.

## Common Form Tags

- `<form>`: Defines an HTML form.
- `<input>`: Accepts user input (text, email, password, etc.).
- `<label>`: Provides a label for an input field.
- `<select>`: Creates a dropdown list.
- `<textarea>`: Multi-line text input.
- `<button>`: Clickable button.
- `<fieldset>`: Groups related elements.
- `<legend>`: Defines a title for a `<fieldset>`.

## Attributes

- `action`: Specifies where the form data is sent.
- `method`: Defines the HTTP method (GET/POST).
- `name`: Identifies the form input.
- `value`: Defines default input values.
- `placeholder`: Provides hints for user input.
- `required`: Makes input fields mandatory.
- `autocomplete`: Suggests previously entered values.

# <===================================================>

# DAY (5) CSS Transforms, Transitions, and Z-Index

## Introduction
CSS provides powerful features like **transforms, transitions, and z-index** to enhance the visual appeal and interactivity of web elements. These properties allow elements to move, rotate, scale, animate, and stack efficiently.

---

## 1. CSS Transforms
The `transform` property allows elements to be visually manipulated in different ways.

### **Types of Transforms:**
- **`rotate(angle)`**: Rotates an element.
- **`scale(x, y)`**: Scales an element (x and y axes).
- **`skew(x-angle, y-angle)`**: Skews an element.
- **`translate(x, y)`**: Moves an element along the x and y axes.

### **Example:**
```css
.box {
  transform: rotate(45deg); /* Rotates the element */
}
```

---

## 2. CSS Transitions
CSS transitions allow smooth changes in property values over a duration.

### **Transition Properties:**
- **`transition-property`**: Specifies the property to animate.
- **`transition-duration`**: Sets the time for the transition.
- **`transition-timing-function`**: Defines the animation speed curve.
- **`transition-delay`**: Sets a delay before starting the transition.

### **Example:**
```css
.button {
  background-color: blue;
  transition: background-color 0.5s ease-in-out;
}
.button:hover {
  background-color: red;
}
```

---

## 3. CSS Z-Index
The `z-index` property controls the stacking order of elements.

### **Rules:**
- Elements with a **higher `z-index`** appear in front.
- Default value is `auto`.
- Works only on elements with `position: relative, absolute, or fixed`.

### **Example:**
```css
.box1 {
  position: absolute;
  z-index: 1;
  background-color: yellow;
}
.box2 {
  position: absolute;
  z-index: 2;
  background-color: red;
}
```

---

## Conclusion
By using **transforms**, **transitions**, and **z-index**, you can create engaging UI interactions. These properties help in making web pages more interactive and visually appealing.

# <===================================================>

# DAY (6) Exploring JavaScript Alerts, Confirms, and Prompts**

## Overview
This project demonstrates how to use JavaScript’s built-in `alert()`, `confirm()`, and `prompt()` functions along with `if-else` conditions to create interactive web experiences.

## Features
- **Alert Box (`alert()`)**: Displays a message to the user.
- **Confirm Box (`confirm()`)**: Asks for user confirmation (OK or Cancel).
- **Prompt Box (`prompt()`)**: Takes user input.
- **If-Else Conditions**: Controls the flow based on user responses.

## Code Example
```javascript
// Alert example
alert("Welcome to our interactive JavaScript demo!");

// Confirm example
let userConfirmation = confirm("Do you want to proceed?");
if (userConfirmation) {
    alert("You chose to proceed!");
} else {
    alert("You chose to cancel!");
}

// Prompt example
let userName = prompt("What is your name?");
if (userName) {
    alert("Hello, " + userName + "! Nice to meet you.");
} else {
    alert("You didn't enter a name.");
}
```

## How to Use
1. Copy the above JavaScript code into a `.js` file or inside a `<script>` tag in an HTML file.
2. Open the file in a web browser.
3. Interact with the pop-up dialogs and observe the responses.

## Why Use These Features?
- Simple way to interact with users.
- Great for basic validation and user choices.
- Useful for debugging and quick user feedback.

---


# <===================================================>

# Day (7): JavaScript Functions and Variables**

## Overview
This document covers the fundamentals of JavaScript functions and variables. You will learn how to declare variables using `var`, `let`, and `const`, and how to define and use functions, including function declarations, parameters, return values, and arrow functions.

## Variables in JavaScript
Variables store data and can be declared using:
- `var` (old, avoid using it)
- `let` (block-scoped, can be reassigned)
- `const` (block-scoped, cannot be reassigned)

### Example
```javascript
var globalVar = "I am a global variable";
let name = "Shivarth";
const pi = 3.14159;
```

## Functions in JavaScript
Functions allow code reuse and better organization.

### 1️⃣ Function Declaration
```javascript
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
greet();
```

### 2️⃣ Function with Parameters
```javascript
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Shivarth");
```

### 3️⃣ Function with Return Value
```javascript
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum);
```

### 4️⃣ Arrow Functions (ES6)
```javascript
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(4, 3));
```

## Task
1. Create a function that calculates the area of a rectangle.
2. Create a function that checks if a number is even or odd.
3. Use `let` and `const` to declare variables properly.


## How to Run the Code
1. Copy the above JavaScript code into a `.js` file or inside a `<script>` tag in an HTML file.
2. Run the file in a browser or using Node.js.
3. Observe the console outputs.

# <===================================================>


# DAY (8) Array Methods Demo

## Description
This project demonstrates various JavaScript array methods through an interactive webpage. Users can manipulate an array using buttons, with results displayed on the page and logged to the console.

## Features
- **Adding & Removing Elements:**
  - `push()`: Adds an element to the end.
  - `pop()`: Removes the last element.
  - `unshift()`: Adds an element to the beginning.
  - `shift()`: Removes the first element.
  - `splice()`: Modifies the array by adding/removing elements.
  - `slice()`: Creates a shallow copy of a portion of the array.

- **Searching & Filtering:**
  - `indexOf()`: Finds the index of an element.
  - `lastIndexOf()`: Finds the last occurrence index of an element.
  - `includes()`: Checks if an element exists.
  - `find()`: Finds the first element matching a condition.
  - `findIndex()`: Finds the index of the first element matching a condition.
  - `filter()`: Filters elements based on a condition.

- **Sorting & Reversing:**
  - `sort()`: Sorts the array.
  - `reverse()`: Reverses the array.

# <===================================================>

# DAY ( 9 ) JavaScript Concepts Demonstration

This project demonstrates various JavaScript concepts, including array methods (`map`, `forEach`, `filter`, and `reduce`), event handling, functions, and objects.

## Features
- **Map:** Multiplies each element in an array by 2.
- **ForEach:** Logs each element in the array.
- **Filter:** Filters elements greater than 3.
- **Reduce:** Calculates the sum of all elements.
- **Objects & Methods:** Displays an object's properties and calls a method to generate a greeting.

## Usage
1. Open the `index.html` file in a browser.
2. Click the buttons to execute the different JavaScript functions.
3. View the results displayed in the output section.

# <===================================================>