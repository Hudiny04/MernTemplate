require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/workouts', workoutRoutes);



app.use((req,res,next) =>{
  console.log(req.path, req.method)
  next()
})

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Error connecting to MongoDB', err);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));