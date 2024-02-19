const fs = require("fs");

// Load environment variables
require("dotenv").config();

// Read firebase.json file
const firebaseConfig = require("../firebase.json");

// Update the host value in the functions emulator configuration
firebaseConfig.emulators.functions.host = process.env.FIREBASE_FUNCTIONS_HOST;

// Write the updated configuration back to firebase.json
fs.writeFileSync("../firebase.json", JSON.stringify(firebaseConfig, null, 2));

console.log("Firebase configuration updated successfully.");
