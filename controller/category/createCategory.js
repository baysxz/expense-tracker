import { sql } from "../../database/index";

exports.createCategory = async (request, response) => {
  const { name, description, categoryImg } = request.body;
  try {
    await sql`INSERT INTO category (name, description, categoryImg)
                   VALUES (${name}, ${description}, ${categoryImg})`;
    response.status(200).json({ category: request.body });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
