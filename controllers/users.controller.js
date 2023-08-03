const { v4: uuidv4 } = require('uuid');

let usersData = require('../models/user.model');

const getAllUsers = (request, response) => {
  response.status(200).json({ usersData });
};

const createUsers = (request, response) => {
  const id = uuidv4(),
    name = request.body.name,
    email = request.body.email;

  const user = { id, name, email };
  usersData.push(user);

  response.status(201).json(user);
};

const updateUsers = (request, response) => {
  const userId = request.params.id;
  const { name, email } = request.body;

  usersData
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.email = email;
    });

  response.status(200).json(usersData);
};

const deleteUser = (request, response) => {
  const userId = request.params.id;

  usersData = usersData.filter((user) => user.id !== userId);

  response.status(202).json();
};

module.exports = { getAllUsers, createUsers, updateUsers, deleteUser };
