type AuthCode = string;
type Hash = string;
type IsFreeHash = boolean;
type Url = string;

interface Bindings {
  REDIRECTIONS?: KVNamespace;
  AUTH_CODE?: AuthCode;
}
