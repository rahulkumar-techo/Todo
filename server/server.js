import express from "express";
import dotenv from 'dotenv'
import databaseApi from "./src/config/databaseApi.js";
import userRoutes from "./src/routes/user.routes.js";
import "colors"
import morgan from "morgan";
import cors from "cors"
dotenv.config()

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
databaseApi();

// Your routes
app.use(userRoutes);











// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});




























const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`.bgYellow);
});


