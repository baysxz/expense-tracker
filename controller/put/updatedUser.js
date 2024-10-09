// import { sql } from "../../database/index";

// exports.updateUser = async (request, response) => {
//   const { userId } = request.params;
//   const { email, name, password, avatarImg } = request.body;

//   try {
//     const updatedUser = await sql`UPDATE users
//       SET email = ${email},
//       name=${name},
//       password=${password},
//       avatarImg=${avatarImg}
//       WHERE userId=${userId}
//      `;

//     response.status(200).json({
//       message: "amjilttai",
//       user: updatedUser,
//     });
//   } catch (error) {
//     console.log(error);
//     response.status(400).json({
//       message: "failed",
//     });
//   }
// };
