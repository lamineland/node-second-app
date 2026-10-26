// Exercise 3 — Working with the file system
// Run with: node files-task.js
//
// Note: the exercise creates "welcome.txt" but asks to read "hello.txt",
// so a sample "hello.txt" ships with this project to make the read succeed.

const fs = require("fs");

// Part 1: create "welcome.txt" containing the line "Hello Node"
fs.writeFile("welcome.txt", "Hello Node\n", (err) => {
  if (err) {
    console.error("Could not create welcome.txt:", err.message);
    return;
  }
  console.log("welcome.txt was created successfully.");
});

// Part 2: read "hello.txt" and console.log its data
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Could not read hello.txt:", err.message);
    return;
  }
  console.log("Content of hello.txt:");
  console.log(data);
});
