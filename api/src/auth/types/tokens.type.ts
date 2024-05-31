interface UserTypes {
  name: string;
  surname: string;
}

export type Tokens = {
  access_token: string;
  refresh_token: string;
  user?: UserTypes;
};
