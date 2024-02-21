const fs = require("fs");
const path = require("path");

const envPath = path.resolve(__dirname, "..", ".env.local");

// Load environment variables
require("dotenv").config({ path: envPath });

// Read firebase.json file
const firebaseConfig = require("../firebase.json");

// Update the host value in the functions emulator configuration
firebaseConfig.emulators.functions.host = process.env.FUNCTIONS_HOST;
console.log(process.env.FUNCTIONS_HOST);

// Write the updated configuration back to firebase.json
fs.writeFileSync("../firebase.json", JSON.stringify(firebaseConfig, null, 2));

console.log("Firebase configuration updated successfully.");
