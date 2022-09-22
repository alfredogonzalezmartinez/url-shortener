export const extractBodyData: PagesFunction = async ({
  data,
  request,
  next,
}) => {
  const body = await request.json<Record<string, unknown>>();

  Object.entries(body).forEach(([key, value]) => {
    data[key] = value;
  });

  return next();
};
