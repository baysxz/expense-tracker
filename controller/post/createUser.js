import { sql } from "../../database/index";

exports.createUser = async (request, response) => {
  const { email, name, password, avatarImg } = request.body;
  try {
    await sql`INSERT INTO users (email, name, password, avatarImg)
               VALUES (${email}, ${name}, ${password}, ${avatarImg})`;
    response.status(200).json({ users: request.body });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
