import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_USER_PASSWORD}@cluster001.1k5qnjt.mongodb.net/todo?retryWrites=true&w=majority`;

const databaseApi = async () => {
  try {
    const connection = await mongoose.connect(uri);

    console.log({
      message: "Database is connected",
      status: connection.connection.host,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default databaseApi;
