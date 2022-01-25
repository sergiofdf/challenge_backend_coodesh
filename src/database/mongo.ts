// eslint-disable-next-line import/no-import-module-exports
import mongoose from "mongoose";

import { mongoPass } from "../../config.json";

const mongoPath = `mongodb+srv://root:${mongoPass}@cluster0.yvlmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const mongoConnection = async () => {
  await mongoose.connect(mongoPath, {});

  return mongoose;
};

export { mongoConnection };
