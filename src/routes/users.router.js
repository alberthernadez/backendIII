import { Router } from "express";

const router = Router();
/**
 * @swagger
 * /users:
    * get:
 * summary: Obtener todos los usuarios
    * responses:
 * 200:
 * description: Lista de usuarios
    */
router.get("/", (req, res) => {
    res.json({ message: `Lista de usuarios` });
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
router.post("/", (req, res) => {
    res.status(201).json({ message: `Usuario creado`});
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 */
router.get("/:id", (req, res) => {
    res.json({ message: `Detalles del usuario ${req.params.id}` });
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put("/:id", (req, res) => {
    res.json({ message: `Usuario ${req.params.id} actualizado` });
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete("/:id", (req, res) => {
    res.json({ message: `Usuario ${req.params.id} eliminado` });
});

export default router; 