import express from "express";
import { router } from "./routs";

const app = express();

app.use(express.json());

app.use(router);

export { app };
