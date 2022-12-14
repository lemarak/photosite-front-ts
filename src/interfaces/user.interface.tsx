enum Level {
  Beginner = "débutant",
  Intermediate = "intermédiaire",
  Professional = "pro",
}

export interface IUser {
  _id: string;
  email: string;
  account: IAccount;
  token: string;
  hash: string;
  salt: string;
}

export interface IAccount {
  username: string;
  slug: string;
  firstname?: string;
  lastname?: string;
  city?: string;
  phone?: string;
  level?: Level;
}

export interface IGetUsers {
  count: number;
  users: IUser[];
}

export interface IUserSignup {
  username: string;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  city?: string;
  phone?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
