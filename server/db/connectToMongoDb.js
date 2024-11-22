import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Success connected to MondoDB");
  } catch (error) {
    console.log("Error to connecting to MongoDB ", error.message);
  }
};

export default connectToMongoDb;