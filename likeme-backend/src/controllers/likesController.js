import { getPosts, createPost } from "../models/likeModel.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json({ posts: posts});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPosts = async (req, res) => {
    try {
        const { post } = req.body;
        const newPost = await createPost(post);
        res.status(201).json({ post: newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
