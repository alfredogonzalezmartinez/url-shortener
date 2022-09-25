import { listRedirection } from "./controllers/listRedirections";
import { saveRedirection } from "./controllers/saveRedirection";

export const onRequestGet = listRedirection;
export const onRequestPost = saveRedirection;
export const onRequestPut = saveRedirection;
