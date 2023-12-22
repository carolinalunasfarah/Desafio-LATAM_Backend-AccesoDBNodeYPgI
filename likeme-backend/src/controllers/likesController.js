import { getPosts, createPost } from "../models/likeModel.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getLikeMeConnection = async (req, res) => {
    try {
        res.sendFile(__dirname + "./index.html");
        res.status(200);
    } catch (error) {
        throw new Error("Error getting all posts: " + error.message);
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPosts = async (req, res) => {
    try {
        const { title, url: imgSrc, description } = req.body;
        const newPost = await createPost(title, imgSrc, description);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
