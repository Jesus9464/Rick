import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfigRoot: PersistConfig<any> = {
  key: "root",
  storage,
  blacklist: ["characters"],
  version: 3,
};
