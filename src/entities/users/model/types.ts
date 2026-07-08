export interface User {
  id: number;
  name: string;
  email: string;
  role: 'content' | 'marketing';
  // phone?: string;
  // avatar?: string;
  // и другие поля
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentUser: User | null;
}