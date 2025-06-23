import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Usuarios',
        version: '1.0.0',
        description: 'Documentación del módulo de usuarios',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
            description: 'Servidor local',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/users.router.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export {swaggerUi, swaggerSpec};