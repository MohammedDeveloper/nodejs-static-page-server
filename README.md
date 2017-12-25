# NODE JS - Setup and Basic Static Page Server
- Google Chrome V8 Runtime
- https://nodejs.org
- Install nodejs
- Install mongodb
- mongod --directoryperdb --dbpath <code>mongodb\data\db</code> --logpath <code>mongodb\log\logfilename.log</code> --logappend --rest --install
- Start mongodb: <code> net start mongodb </code>
- Install node modules using npm | https://npmjs.org
- In this example: <code> npm install connect </code> and <code> npm install serve-static </code> | https://stackoverflow.com/questions/24346161/nodejs-connect-cannot-find-static
- Run in Terminal/GIT Bash: <code> node app </code> or <code> node app.js </code>

## Example
<code>
Server running at: http://localhost:1234
</code>
<code>
Home -  http://localhost:1234
</code>
<code>
About -  http://localhost:1234/about.html
</code>