export interface IUser {
  [x: string]: string | undefined;
  userId: string;
  name: string;
  email: string;
  role: "customer" | "admin";
}
