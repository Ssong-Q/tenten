import { UserType } from './users';

export interface PostLoginRequestType {
  email: string;
  password: string;
}

export interface PostLoginResponseType {
  user: UserType[];
  accessToken: string;
}

export interface PutPasswordRequestType {
  password: string;
  newPassword: string;
}
