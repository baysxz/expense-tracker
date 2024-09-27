import { sql } from "../../database/index";

exports.getCategory = async (_request, response) => {
  try {
    const category = await sql`SELECT * FROM category`;
    response.status(200).json({ category: category });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
