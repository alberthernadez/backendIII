import { Router } from "express";
import { faker } from "@faker-js/faker";

const router = Router();

router.get("/users", (req, res) => {
    const users = [];

    for (let i = 0; i < 10; i++) {
        users.push({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            birthdate: faker.date.birthdate(),
        });
    }

    res.json(users);
});

export default router;
