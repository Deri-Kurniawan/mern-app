const express = require('express');
const db = require('./config/database');
const userRoute = require('./routes/userRoute');
const app = express();
const cors = require('cors');

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.log(`Database Connection Error : ${error}`);
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoute);

app.listen(5000, () => console.log(`Server listen at port 5000`));