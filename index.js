require('dotenv').config();
const app = require('./app');

const port = process.env.port || 4000,
  address = '127.0.0.1';

app.listen(port, () => {
  console.log(`Server is running at http://${address}:${port}`);
});
