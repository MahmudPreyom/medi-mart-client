export interface IUser {
  [x: string]: string | undefined;
  userId: string;
  name: string;
  email: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "customer" | "admin";
  iat?: number;
  exp?: number;
}
