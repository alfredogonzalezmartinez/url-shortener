export enum SUSSES_STATUS {
  OK = 200,
  CREATED = 201,
  NOT_CONTENT = 204,
}

export enum ERROR_STATUS {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
}

export const sussesResponse = (
  data: string | object,
  status: SUSSES_STATUS = SUSSES_STATUS.OK
): Response =>
  new Response(JSON.stringify({ data }), {
    headers: { "Content-Type": "application/json" },
    status,
  });

export const errorResponse = (
  error: string | object,
  status: ERROR_STATUS
): Response =>
  new Response(JSON.stringify({ error }), {
    headers: { "Content-Type": "application/json" },
    status,
  });
