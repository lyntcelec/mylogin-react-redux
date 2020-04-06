import {
	SET_TOKEN
} from '../constants/user';

const INIT_STATE = {
	AccessToken: false
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return Object.assign({}, state, {
				AccessToken: action.data
			})

		default:
			return state
	}
}