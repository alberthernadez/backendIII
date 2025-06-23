import { Router } from "express";

const router = Router();

router.get ( "/",(req,res) => {
    res.json({message:"lesta de usuarios"});
});

router.post("/", (req,res) => {
    res.json({message: "usuario creado"});
});

router.get("/:id",(req,res) => {
    res.json({message : "detalles del usuario ${req.params.id}"});
});

router.put("/:id",(req,res) => {
    res.json({message: "Usuario ${req.params.id} actualizado"});
});

export default router; 