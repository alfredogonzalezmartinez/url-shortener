import { isValidUrl } from "../helpers/isValidUrl";
import { ERROR_STATUS, errorResponse } from "../helpers/responseWrappers";

export const checkUrl: PagesFunction<Bindings, any, { url?: Url }> = async ({
  data,
  next,
}) => {
  const url = data.url as string;

  const isInvalidUrl = !isValidUrl(url);

  if (isInvalidUrl) {
    return errorResponse("Invalid URL", ERROR_STATUS.BAD_REQUEST);
  }

  return next();
};
