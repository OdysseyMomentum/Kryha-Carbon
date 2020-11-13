import mongoose from "mongoose";

import { MONGO } from "../constants";

const startMongo = async () => {
  try {
    await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.info(`** MongoDB connection open on ${MONGO} **`);
  } catch (err) {
    console.warn("> Failed opening MongoDB connection", err);
    console.info("> Close MongoDB connection");
    process.exit(1);
  }
};

export { startMongo };
