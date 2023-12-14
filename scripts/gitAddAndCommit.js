const { exec } = require("shell-exec");


const commitMessage = process.argv[2] || "updating code";
const command = `git add . && git commit -m '${commitMessage}'`;

exec(command)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
