import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import router from "./app/routes/routes";

app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...!");
});

export default app;
