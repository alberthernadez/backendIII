import express from "express";
import usersRouter from "./src/routes/users.router.js";
import adoptionRouter from "./src/routes/adoption.router.js";


const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/adoptions", adoptionRouter);

if (process.env.NODE_ENV !== 'test') {
    const { swaggerUi, swaggerSpec } = await import('./src/routes/swagger.js');
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default app;
