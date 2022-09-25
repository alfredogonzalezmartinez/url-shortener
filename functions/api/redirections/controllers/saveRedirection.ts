import { SUSSES_STATUS, sussesResponse } from "../helpers/responseWrappers";

export const saveRedirection: PagesFunction<
  Environment,
  any,
  { hash?: Hash; isFreeHash?: IsFreeHash; url?: Url }
> = async ({ env, request, data }) => {
  const hash = data.hash as string;
  const url = data.url as string;
  const isFreeHash = data.isFreeHash as boolean;

  await env.REDIRECTIONS?.put(hash, url);

  const urlBase = new URL(request.url).origin;
  const sortUrl = { url: `${urlBase}/${hash}` };

  return isFreeHash
    ? sussesResponse(sortUrl, SUSSES_STATUS.CREATED)
    : sussesResponse(sortUrl, SUSSES_STATUS.OK);
};
