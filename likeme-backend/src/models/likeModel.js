import { pool } from "../../database/connectionDB.js";

export const getPosts = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows[0];
    } catch (error) {
        throw new Error("Error getting all posts: " + error.message);
    }
};

export const createPost = async ({ title, img, description }) => {
    const SQLquery = {
        text: "INSERT INTO posts (title, img, description) VALUES ($1, $2, $3) RETURNING *",
        values: [title, img, description],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error creating post: " + error.message);
    }
};
