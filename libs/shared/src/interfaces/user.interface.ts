export interface IUser {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface IUserCredentials {
  email: string;
  password: string;
}