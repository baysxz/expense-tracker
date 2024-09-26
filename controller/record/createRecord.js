import { sql } from "../../database/index";

exports.createRecord = async (request, response) => {
  {
    const { userId, name, amount, description, categoryid } = request.body;
    try {
      await sql`INSERT INTO record (userId, name, amount, description, categoryid)
                   VALUES (${userId}, ${name}, ${amount}, ${description}, ${categoryid})`;
      response.status(200).json({ record: request.body });
    } catch (error) {
      response.status(400).json({ message: "error" });
    }
  }
};

// error,,,
