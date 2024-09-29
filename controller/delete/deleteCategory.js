import { sql } from "../../database/index";

exports.deleteCategory = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedCategory =
      await sql`DELETE FROM category WHERE category.categoryId=${id}`;
    response
      .status(200)
      .json({ message: "deleted", category: deletedCategory });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
