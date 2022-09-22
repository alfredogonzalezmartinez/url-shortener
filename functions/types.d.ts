type AuthCode = string;
type Hash = string;
type IsFreeHash = boolean;
type Url = string;

interface Environment {
  Redirections?: KVNamespace;
  AUTH_CODE?: AuthCode;
}
