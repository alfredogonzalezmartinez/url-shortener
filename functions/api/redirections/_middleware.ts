import { auth } from "./middlewares/auth";
import { checkHash } from "./middlewares/checkHash";
import { checkRequiredDataToSave } from "./middlewares/checkRequiredDataToSave";
import { checkUrl } from "./middlewares/checkUrl";
import { extractBodyData } from "./middlewares/extractBodyData";

const redirectionSaveRequestMiddlewares = [
  extractBodyData,
  auth,
  checkRequiredDataToSave,
  checkUrl,
  checkHash,
];

export const onRequestPost = redirectionSaveRequestMiddlewares;
export const onRequestPut = redirectionSaveRequestMiddlewares;
