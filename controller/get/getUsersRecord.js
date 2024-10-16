import { sql } from "../../database/index";

exports.getUsersRecord = async (request, response) => {
  try {
    const record = await sql`SELECT *
    FROM record
    INNER JOIN users ON record.userId = users.userId
    INNER JOIN category ON record.categoryId = category.categoryId`;
    response.status(200).json({ record: record });
  } catch (error) {
    response.status(400).json({ message: "message" });
  }
};
