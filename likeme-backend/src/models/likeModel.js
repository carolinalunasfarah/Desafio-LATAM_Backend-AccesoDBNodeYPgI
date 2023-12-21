import { pool } from "./database/connectionDB.js";

export const getPosts = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows[0];
        console.log(response.rows);
    } catch (error) {
        throw new Error("Error getting all posts: " + error.message);
    }
};
