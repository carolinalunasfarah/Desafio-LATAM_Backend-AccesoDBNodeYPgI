import { getPosts } from "../models/likeModel.js";

export const getAllPosts = async (req, res) => {
    try {
        const response = await getPosts();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
