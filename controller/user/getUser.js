// import { sql } from "../../database/index";
// import { getUsers } from "../user/getUsers";

// exports.getUser = async (request, response) => {
//   const { userId } = request.params;
//   const user = getUsers.find((user) => user.userId === Number(userId));

//   if (user) {
//     response.status(200).json({ user });
//   } else {
//     response.status(400).send(`User: ${id} non existence`);
//   }
// };
