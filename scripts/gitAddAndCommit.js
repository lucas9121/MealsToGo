// Execute commands synchronously
const { execSync } = require('child_process');

const add = () => (
  // stdio: 'inherit' ensures that the command's output is printed in the terminal
  execSync('git add .', { stdio: 'inherit' })
);

const commit = (message) => (
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' })
);

const push = () => (
  execSync('git push', { stdio: 'inherit' })
);

const command = () => {
  const message = process.argv[2] || "updating code"
  add()
  commit(message)
  push()
}

try {
  command();
  console.log('Git updated');
} catch (error) {
  console.error(error);
}
