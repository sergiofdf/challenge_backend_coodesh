import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import nodeSchedule from "node-schedule";

import { AppError } from "./App/middlewares/AppError";
import cors from "./App/middlewares/cors";
import getArticlesUpdatedList from "./database/dailyDbUpdate";
import { router as routes } from "./routes";

const job = nodeSchedule.scheduleJob("0 12 * * * ", () => {
  getArticlesUpdatedList();
});

const app = express();

app.use(express.json());

app.use(cors);
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3001, () =>
  console.log("🔥Server started at http://localhost:3001")
);
