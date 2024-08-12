import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "production",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "communit",
  mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/defaultdb",
};

export default config;
