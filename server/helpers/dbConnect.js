import mongoose from "mongoose";
import config from "../../config/config";

const dbConnect = async () => {
  try {
    console.log("MongoDB URI:", config.mongoUri);
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default dbConnect;
