// Exercise 4 — Random password generator
// Run with: node password-generator.js
// Package docs: https://www.npmjs.com/package/generate-password

const generator = require("generate-password");

// Generates one random password and returns it
function generatePassword() {
  return generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true, // guarantees at least one char from every selected set
  });
}

// Generate and print 3 random passwords
for (let i = 1; i <= 3; i++) {
  const password = generatePassword();
  console.log(`Password ${i}: ${password}`);
}
