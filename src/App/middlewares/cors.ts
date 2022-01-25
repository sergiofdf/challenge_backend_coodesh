import { NextFunction, Request, Response } from "express";

export default function cors(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, PUT, DELETE"
  );
  response.setHeader("Access-Control-Allow-Headers", "x-app-id");
  response.setHeader("Access-Control-Max-Age", "10");
  next();
}
