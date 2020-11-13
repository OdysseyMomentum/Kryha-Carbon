import { PORT, NODE_ENV, CORS_ORIGIN } from "../constants";

import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

export default function (app: express.Application): void {
  app.set("port", PORT);

  app.use(
    bodyParser.json({
      limit: "100mb"
    })
  );
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "100mb"
    })
  );
  app.use(cookieParser());
  app.use(express.static(path.join(process.cwd(), "public")));
  app.enable("trust proxy");

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        return callback(null, (CORS_ORIGIN as unknown) as boolean);
      }
    })
  );

  console.info("--------------------------");
  console.info("===> 😊  Starting Server . . .");
  console.info("===>  Environment: " + NODE_ENV);
}
