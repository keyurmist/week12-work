const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();
//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "classlist_db",
  },
  console.log(`Connected to the classlist_db database.`)
);
//querying the database for the students table
db.query("SELECT * FROM students", function (err, results) {
  console.log(results);
});
//catching invalid routes and displaying a default error
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
