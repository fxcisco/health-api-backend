import { Express } from 'express'
import { drugRouter } from "./services/routes";

export const applyAppRoutes = (app: Express) => {
  app.use('/api/services', drugRouter);
}