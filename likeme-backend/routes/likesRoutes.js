import { Router } from "express";
import {
    createPosts,
    getAllPosts,
    getPostById,
    likedPosts,
    getLikeMeConnection,
    notFound,
} from "../src/controllers/likesController.js";

const router = Router();

// GET CONNECT FRONTEND
router.get("/", getLikeMeConnection);

// GET ALL REGISTERS IN TABLE posts
router.get("/posts", getAllPosts);

// GET post BY ID
router.get("/posts/:id", getPostById);

// PUT post BY ID
router.put("/posts/like/:id", likedPosts);

// POST A NEW POST
router.post("/posts", createPosts);

// NOT FOUND
router.all("*", notFound);

export default router;
