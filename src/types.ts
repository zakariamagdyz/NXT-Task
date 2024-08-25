export type Admin = {
  id: number;
  name: string;
  type: UserType;
  email: string;
  teams: string;
  access: string[];
  image: string;
};

export enum UserType {
  owner = 1,
  admin = 2,
  user = 3,
}

export const types = {
  1: "owner",
  2: "admin",
  3: "user",
};
