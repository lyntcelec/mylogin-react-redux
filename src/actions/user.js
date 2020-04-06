import {
	SET_TOKEN
} from '../constants/user';

export const SetToken = (data) => ({
	type: SET_TOKEN,
	data
});

export const UserLogin = (body) => {
  return (dispatch) => {
		if (body.email !== '' && body.password !== '') {
			dispatch(SetToken(true))
			localStorage.setItem('token', 'ABCDEF')
		}
  };
}

export const UserLogout = () => {
  return (dispatch) => {
		dispatch(SetToken(false))
		localStorage.removeItem('token')
  };
}