import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "communit",
  mongoUri: "mongodb://localhost:27017/",
};

// process.env.MONGODB_URI || 

export default config;
