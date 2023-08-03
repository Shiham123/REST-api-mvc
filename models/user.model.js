const { v4: uuidv4 } = require('uuid');

const usersData = [
  { id: uuidv4(), name: 'person one', email: 'one@email.com' },
  { id: uuidv4(), name: 'person two', email: 'two@email.com' },
];

module.exports = usersData;
