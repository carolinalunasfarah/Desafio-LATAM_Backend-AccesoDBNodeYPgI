import { getPosts, createPost } from "../models/likeModel.js";

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
        const { title, img, description } = req.body;
        const newPost = await createPost(title, img, description);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
