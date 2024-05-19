// melakukan import
const express = require("express");
const cors = require("cors");

// membuat objek express
const app = express();

// membuat alamat website lokal
const port = 9000;

const employee = require("./routes/employee.route");
const project = require("./routes/project.route");
const activity = require("./routes/activity.route");

// konfigurasi
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({ alter: true });

// routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/employees", employee);
app.use("/api/projects", project);
app.use("/api/activities", activity);

app.listen(port, () => {
  console.log(
    `Aplikasi ini berjalan pada port: ${port}, klik http://localhost:${port}`
  );
});
