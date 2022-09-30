const express = require("express");
const router = require("./router/index");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://imperiumgk.netlify.app",
  })
);
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
