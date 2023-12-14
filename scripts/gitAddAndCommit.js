// const fs = require('fs');
// const git = require('git');
const { execSync } = require('child_process');

const add = () => {
  execSync('git add .', { stdio: 'inherit' });
};

const commit = (message) => {
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
  // git.commit(message);
};

const command = () => {
  const message = process.argv[2] || "updating code"
  add()
  commit(message)
  console.log(`Received custom message: ${message}`)
  // const customMessage = process.argv[2]
}

command()
