import {Router} from "express";

const router = Router();

router.get("/", (req,res) => {
    res.json({message: "lista de adopciones"});
});

router.post("/", (req,res) => {
    res.json({message: "adopcion creada"});
});

router.get("/:id", (req,res) => {
    res.json({message: "Detalles de la adopción ${req.params.id}"});
});

router.put("/:id", (req,res) => {
    res.json({message: "Adopción ${req.params.id} actualizada"});
});

router.delete("/:id", (req,res) => {
    res.json({message: "Adopción ${req.params.id} eliminada"});
});

export default router;


