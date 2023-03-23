
require('dotenv').config({ path: `.env.${process.env.NODE_ENV.trim()}` });
const port = process.env.PORT;
const express = require('express');
const app = express();
const userRouter = require("./router/user")
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user",userRouter);



// process.on('uncaughtException', err => {
//     console.log(`Uncaught Exception: ${err.message}`)
//     process.exit(1)
// })

// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled rejection at ', promise, `reason: ${err.message}`)
//     process.exit(1)
// })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
