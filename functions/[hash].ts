export const onRequestGet: PagesFunction<Bindings> = async ({
  env,
  params,
}) => {
  const hash = params.hash as string;
  const url = await env.REDIRECTIONS?.get(hash);

  if (url == null) {
    return new Response(null, { status: 404 });
  }

  return Response.redirect(url);
};
