import { Router } from "express";
import { getAllPosts } from "../src/controllers/likesController";

const router = Router();

// GET ALL REGISTERS IN TABLE posts
router.get("/posts", getAllPosts);

// POST A NEW POST
router.post("/posts");

// NOT FOUND
router.all("*");

export default router;
