import { pool } from "../../database/connectionDB.js";

export const getPosts = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error getting all posts: " + error.message);
    }
};

export const createPost = async (title, imgsrc, description, likes=0) => {
    const SQLquery = {
        text: "INSERT INTO posts (title, imgsrc, description, likes) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [title, imgsrc, description, likes],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows[0];
    } catch (error) {
        throw new Error("Error creating post: " + error.message);
    }
};
