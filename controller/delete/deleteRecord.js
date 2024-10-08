import { sql } from "../../database/index";

exports.deleteRecord = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedRecord = await sql`DELETE FROM record WHERE userid=${id}`;
    response.status(200).json({ message: "deleted", record: deletedRecord });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
