import mongoose from "mongoose"; //{ mongo }
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_NAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-3z8se83-shard-00-00.ahd3gfm.mongodb.net:27017,ac-3z8se83-shard-00-01.ahd3gfm.mongodb.net:27017,ac-3z8se83-shard-00-02.ahd3gfm.mongodb.net:27017/?ssl=true&replicaSet=atlas-u9y3a8-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("database is connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("database is disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error", error.message);
  });
};

export default Connection;
