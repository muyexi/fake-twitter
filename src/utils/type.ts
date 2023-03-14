export interface User {
  id: number;
  name: string;
  password: string;
}

export interface Tweet {
  id: number;
  text: string;
  time: number;
  deleted?: boolean;
  userId: number;
  userName: string;
}
