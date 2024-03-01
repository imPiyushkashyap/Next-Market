// Import the 'dotenv' package to load environment variables from a .env file
require('dotenv').config();

// Access the environment variables
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  JWT_SECRET,
  NEXTAUTH_URL
} = process.env;

// Output the values to the console to verify they are loaded correctly
console.log("GOOGLE_CLIENT_ID:", GOOGLE_CLIENT_ID);
console.log("GOOGLE_SECRET:", GOOGLE_SECRET);
console.log("JWT_SECRET:", JWT_SECRET);
console.log("NEXTAUTH_URL:", NEXTAUTH_URL);
