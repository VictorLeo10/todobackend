import express, { Request, Response, Application } from "express";
import router from "../routes/routes";
import cors from "cors";
const port: number | string = process.env.port || 2032;
const app: Application = express();
app.use(express.json());
require("../config/db");
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "server is running",
    });
  } catch (error) {
    return res.status(404).json({
      message: "something went wrong",
      data: error,
    });
  }
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`port ${port} is running`);
});
