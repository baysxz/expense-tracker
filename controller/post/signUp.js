import { sql } from "../../database/index";

exports.signUp = async () => {
  const { name, email, password } = request.body;
  try {
    await sql`INSERT INTO signUp (email, name, password)
                   VALUES (${email}, ${name}, ${password})`;
    response.status(200).json({ signUp: request.body });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
