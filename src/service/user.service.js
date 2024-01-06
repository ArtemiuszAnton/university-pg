const { createUserDB, getAllUsersDB, updateUsersByIdDB, deleteUserByIdDB, getUserByIdDB } = require('../repository/user.repository');

async function createUser(name, surname, birth, city, age) {
  const data = await createUserDB(name, surname, birth, city, age);
  return data;
}

async function getAllUsers() {
  const data = await getAllUsersDB();
  return data;
}

async function getUserById(users_infoId) {
  const data = await getUserByIdDB(users_infoId);
  return data;
}

async function updateUsersById(usersId, users_infoId, name, surname, birth, city, age) {
  const data = await updateUsersByIdDB(usersId, users_infoId, name, surname, birth, city, age);
  return data;
}

async function deleteUserById(users_infoId) {
  const data = await deleteUserByIdDB(users_infoId);
  return data;
}

module.exports = { createUser, getAllUsers, updateUsersById, deleteUserById, getUserById };
