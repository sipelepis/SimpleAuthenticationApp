
export interface UserLoginInterface{
  password: string;
  email: string;
}
export interface UserInterface extends UserLoginInterface{
  username: string;
}
export interface UserResponseInterface{
  username: string;
  email: string;
  token: string;
}
