import { Router } from "express";

const router = Router();

// GET ALL REGISTERS IN TABLE posts
router.get("/posts");

// POST A NEW POST
router.post("/posts");

// NOT FOUND
router.all("*");

export default router;
