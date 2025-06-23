import express from "express";
import usersRouter from "./src/routes/users.router";
import adoptionRouter from "./src/routes/adoption.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/adoptions", adoptionRouter);

app.listen(PORT, () => {
    console.log("`Servidor corriendo en http://localhost:${PORT}` ")
});

