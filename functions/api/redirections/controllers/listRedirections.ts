import { SUSSES_STATUS, sussesResponse } from "../helpers/responseWrappers";

export const listRedirection: PagesFunction<Bindings> = async ({ env }) => {
  const keys = (await env.REDIRECTIONS?.list())?.keys ?? [];

  const redirections = await Promise.all(
    keys.map(async ({ name: hash }) => {
      const url = await env.REDIRECTIONS?.get(hash);
      return { hash, url };
    })
  );

  return sussesResponse(redirections, SUSSES_STATUS.OK);
};
