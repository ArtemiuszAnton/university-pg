const express = require('express');
const { createUser, getAllUsers, updateUsersById, deleteUserById, getUserById } = require('../service/user.service');
const { isValidUserId } = require('../helper/validation');

const route = express.Router();

route.post('/', async (req, res) => {
  try {
    const { name, surname, birth, city, age } = req.body;
    const data = await createUser(name, surname, birth, city, age);
    res.status(200).send(data);
  } catch (er) {
    res.status(400).send(er.message);
  }
});

route.get('/', async (_req, res) => {
  try {
    const data = await getAllUsers();
    res.status(200).send(data);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.get('/:users_infoId', isValidUserId, async (req, res) => {
  try {
    const { users_infoId } = req.params;
    const data = await getUserById(users_infoId);
    res.status(200).send(data);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

route.put('/:usersId/:users_infoId', isValidUserId, async (req, res) => {
  try {
    const { usersId, users_infoId } = req.params;
    const { name, surname, birth, city, age } = req.body;
    const data = await updateUsersById(usersId, users_infoId, name, surname, birth, city, age);
    res.status(200).send(data);
  } catch (er) {
    res.status(400).send(er.message);
  }
});

route.delete('/:users_infoId', isValidUserId, async (req, res) => {
  try {
    const { users_infoId } = req.params;
    const data = await deleteUserById(users_infoId);
    res.status(200).send(data);
  } catch (er) {
    res.status(400).send(er.message);
  }
});

module.exports = route;
