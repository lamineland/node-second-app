# Node.js Guided Exercises (node-second-app)

Five guided Node.js exercises, one file per problem.

## Requirements

- Node.js installed (`node --version`)
- npm packages already installed: `generate-password`, `nodemailer`

## Exercises

### 1. Hello World — `hello-world.js`

```sh
node hello-world.js
```

Prints `HELLO WORLD` to the console.

### 2. Your first server — `server.js`

```sh
node server.js
```

Runs on port 3000. Open <http://localhost:3000> and you will see
`<h1>Hello Node!!!!</h1>` (the response body ends with a newline).
Stop the server with `Ctrl + C`.

### 3. File system — `files-task.js`

```sh
node files-task.js
```

1. Creates `welcome.txt` containing the line `Hello Node`.
2. Reads `hello.txt` and prints its content to the console.

> Note: the exercise creates `welcome.txt` but asks to read `hello.txt`,
> so a sample `hello.txt` ships with this project to make the read work.

### 4. Password generator — `password-generator.js`

```sh
node password-generator.js
```

Uses the [`generate-password`](https://www.npmjs.com/package/generate-password)
package to generate random passwords and print them.

### 5. Email sender — `email-sender.js`

```sh
export EMAIL_USER="you@gmail.com"
export EMAIL_PASS="your-app-password"
export EMAIL_TO="you@gmail.com"   # optional, defaults to the sender
node email-sender.js
```

Uses [`nodemailer`](https://www.w3schools.com/nodejs/nodejs_email.asp) to
send yourself an email through Gmail SMTP.

Gmail requires an **app password** (a normal password will be rejected):

1. Enable 2-Step Verification on your Google account.
2. Create an app password at <https://myaccount.google.com/apppasswords>.
3. Use that 16-character password as `EMAIL_PASS`.

## npm shortcuts

Every exercise also has a script in `package.json`:

```sh
npm run hello     # exercise 1
npm run server    # exercise 2
npm run files     # exercise 3
npm run password  # exercise 4
npm run email     # exercise 5
```
