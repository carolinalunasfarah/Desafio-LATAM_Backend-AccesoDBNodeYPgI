import { Router } from "express";
import {
    createPosts,
    getAllPosts,
    getPostById,
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

// POST A NEW POST
router.post("/posts", createPosts);

// NOT FOUND
router.all("*", notFound);

export default router;
