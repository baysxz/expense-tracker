import { sql } from "../../database";

export const signUp = async (request, response) => {
  const { email, name, password, avatarImg } = request.body;
  try {
    const users = await sql`INSERT INTO users (email, name, password, avatarImg)
               VALUES (${email}, ${name}, ${password}, ${avatarImg})
                RETURNING *`;
    response
      .status(200)
      .json({ user: { userId: users[0].userid, email: users[0].email } });
  } catch (error) {
    console.log(error);

    response.status(400).json({ message: "error" });
  }
};
