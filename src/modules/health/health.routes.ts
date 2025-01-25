import { Router } from "express";
import { getHeathHandler } from "./health.controller";

const healthRouter = Router();

healthRouter.get("/", getHeathHandler);

export default healthRouter;