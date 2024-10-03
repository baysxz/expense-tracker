import { sql } from "../../database/index";

export const signIn = async (request, response) => {
  const {name, email, password } = request.body;
  try {
    const users = await sql`SELECT * FROM users
WHERE userid='1' and email='email'
            `;
    response
      .status(200)
      .json({ user: users});
  } catch (error) {
    console.log(error);

    response.status(400).json({ message: "error" });
  }
};