// Alliswell - This is the value return to front end after signIn/signUp

export interface AuthPayload {
  user_id: string;
  accessToken: string;
  newUser: boolean;
  role: string;
}
