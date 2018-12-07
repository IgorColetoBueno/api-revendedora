export enum HttpStatusCode {
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  OK = 200,
  CREATED = 201,
  UPDATED = 202,
  NO_CONTENT = 204
}

export class InternalServerError {
  public status: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
}

export class NotFound {
  public status: HttpStatusCode = HttpStatusCode.NOT_FOUND;
  public message:string = "Nossa API não encontrou nenhum resultado correspondente"
}

export class Ok<T> {
  public status: HttpStatusCode = HttpStatusCode.OK;
  public response:T
}

export class PaginationResponse<T> {
  public data:Array<T>;
  public numberOfRows:number;
}

export interface PaginationParams{
  skip:number;
  limit:number;
}
