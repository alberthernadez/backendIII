# 1. Imagen base
FROM node:20

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar package.json y lock para instalar dependencias primero (mejor para cache)
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del proyecto
COPY . .

# 6. Exponer el puerto (usa el mismo que tenés en .env o el default)
EXPOSE 3000

# 7. Comando para ejecutar la app
CMD ["node", "index.js"]
