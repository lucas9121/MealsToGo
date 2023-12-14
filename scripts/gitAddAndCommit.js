// Execute commands synchronously
const { execSync } = require('child_process');

const add = () => (
  // stdio: 'inherit' ensures that the command's output is printed in the terminal
  execSync('git add .', { stdio: 'inherit' })
);

const commit = (message) => (
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
);

const command = () => {
  const message = process.argv[2] || "updating code"
  add()
  commit(message)
}

command().then(() => console.log(`git updated`)).catch((err) => console.error(err))
