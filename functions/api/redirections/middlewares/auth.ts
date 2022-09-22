import { ERROR_STATUS, errorResponse } from "../helpers/responseWrappers";

export const auth: PagesFunction<
  Environment,
  any,
  { authCode?: AuthCode }
> = async ({ data, env, next }) => {
  if (data.authCode !== env.AUTH_CODE) {
    return errorResponse(`Auth failed`, ERROR_STATUS.UNAUTHORIZED);
  }

  return next();
};
