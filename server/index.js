const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(process.env.PORT || 3001, () =>
  console.log(`Connected to port ${process.env.PORT || 3001}`)
);
