import { isMissing } from "../helpers/isMissing";
import { ERROR_STATUS, errorResponse } from "../helpers/responseWrappers";

export const checkRequiredDataToSave: PagesFunction<
  Environment,
  any,
  { hash?: Hash; url?: Url }
> = async ({ data, next }) => {
  const requiredData = ["url", "hash"] as const;

  for (const key of requiredData) {
    const valueIsMissing: boolean = isMissing(data[key]);

    if (valueIsMissing) {
      return errorResponse(`Missing required ${key}`, ERROR_STATUS.BAD_REQUEST);
    }
  }

  return next();
};
