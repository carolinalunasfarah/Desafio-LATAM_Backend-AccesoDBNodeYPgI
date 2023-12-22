import { Router } from "express";
import {
    createPosts,
    getAllPosts,
    getLikeMeConnection,
} from "../src/controllers/likesController.js";

const router = Router();

// GET CONNECT FRONTEND
router.get("/", getLikeMeConnection);

// GET ALL REGISTERS IN TABLE posts
router.get("/posts", getAllPosts);

// POST A NEW POST
router.post("/posts", createPosts);

// NOT FOUND
router.all("*");

export default router;
