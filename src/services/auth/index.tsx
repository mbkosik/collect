import axios from 'axios';

export interface ILoginData {
  email: string;
  password: string;
}
// TODO: ?? types folder for all interfaces

// TODO; ?? new axios instance for login
export const login = (data: ILoginData) =>
  axios({
    method: 'post',
    // TODO: ?? key in constant file or env
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzFz4qtaQAD2ES9KbkAdDtGy20kJYvEhk',
    data: JSON.stringify({
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
