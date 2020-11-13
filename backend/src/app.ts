import express from "express";
import router from "./api";
import expressConfig from "./services/express";
// import router from "./api/index";

const app: express.Application = express();
expressConfig(app);

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// Routes
app.use(router);

app.all("*", (req, res) => {
  throw new Error("Not found route");
});

export { app };
