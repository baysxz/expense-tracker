import { sql } from "../../database/index";

exports.getRecord = async (request, response) => {
  try {
    const record = await sql`SELECT * FROM record`;
    response.status(200).json({ record: record });
  } catch (error) {
    response.status(400).json({ message: "message" });
  }
};
