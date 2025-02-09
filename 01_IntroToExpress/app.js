const express = require('express'); // being pulled from node_modules
const app = express(); // simplifying the method calls
const PORT = 4000; // server port within localhost. Using "all caps" to indicate a "general" variable.
const practiceController = require('./controllers/practice.controller');
const todo = require('./controllers/todo.controller');
// const {todo, practice } = require('./controllers');
const { logTime } = require('./utils');
// const logTime = require('./utils')

app.use(express.static(`${__dirname}/public`));
// __dirname comes from node
// console.log('pathway', __dirname);

app.use(express.json()); // Provides us access to use JSON within our routes.
app.use(express.urlencoded()); // Parses the body from our browser so it can display the reponse.

app.use(logTime);
// console.log(x)

app.use('/practice', practiceController);
// app.use('/practice', practice);
/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js
        ex: localhost:4000/practice
*/
app.use('/todo', todo);

app.listen(PORT, 
    () => console.log(`Server is running on port: ${PORT}`)
    // Provides us feedback that it is running.
    );