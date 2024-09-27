import { sql } from "../../database/index";

exports.updatedCategory = async (request, response) => {
  const { categoryId } = request.params;
  const { name, description, categoryImg } = request.body;

  try {
    const updatedCategory = await sql`UPDATE category
    SET name=${name},
    description=${description},
    categoryImg=${categoryImg}
    WHERE categoryId=${categoryId}
    `;

    response
      .status(200)
      .json({ message: "updated", category: updatedCategory });
  } catch (error) {
    console.log(error);
    response.status(400).json({
      message: error,
    });
  }
};
