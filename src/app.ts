import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import { AppError } from "./App/middlewares/AppError";
import cors from "./App/middlewares/cors";
import cron from "./providers/Cron/cron";
import { router as routes } from "./routes";
import swaggerFile from "./swagger.json";

// Considerado UTC - 3 horas para horário de Brasília: 9am = 12 UTC
// const job = nodeSchedule.scheduleJob("0 12 * * * ", () => {
//   getArticlesUpdatedList();
// });

cron();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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

export { app };
