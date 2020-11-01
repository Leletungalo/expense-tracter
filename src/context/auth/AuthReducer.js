import { SET_USER } from "../Types";
export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_USER:
			return {
				user: payload,
			};

		default:
			return state;
	}
};
