import { ERROR_STATUS, errorResponse } from "../helpers/responseWrappers";

const INVALID_CHARACTERS = [" ", "/", "\\"];

export const checkHash: PagesFunction<
  Bindings,
  any,
  { hash?: Hash; isFreeHash?: IsFreeHash }
> = async ({ data, env, request, next }) => {
  const hash = data.hash as string;

  for (const character of INVALID_CHARACTERS) {
    if (hash.includes(character)) {
      return errorResponse(
        `Invalid character "${character}" in hash`,
        ERROR_STATUS.BAD_REQUEST
      );
    }
  }

  const isFreeHash = (await env.REDIRECTIONS?.get(hash)) == null;

  if (request.method === "POST" && !isFreeHash) {
    return errorResponse("Hash is in use", ERROR_STATUS.BAD_REQUEST);
  }

  data.isFreeHash = isFreeHash;

  return next();
};
