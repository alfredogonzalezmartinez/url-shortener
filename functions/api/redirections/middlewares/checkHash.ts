import { ERROR_STATUS, errorResponse } from "../helpers/responseWrappers";

export const checkHash: PagesFunction<
  Environment,
  any,
  { hash?: Hash; isFreeHash?: IsFreeHash }
> = async ({ data, env, request, next }) => {
  const hash = data.hash as string;

  const isFreeHash = (await env.REDIRECTIONS?.get(hash)) == null;

  if (request.method === "POST") {
    if (!isFreeHash) {
      return errorResponse("Hash is in use", ERROR_STATUS.BAD_REQUEST);
    }
  }

  data.isFreeHash = isFreeHash;

  return next();
};
