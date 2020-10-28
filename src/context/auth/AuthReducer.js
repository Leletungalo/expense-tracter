import { SET_TOKEN } from "../Types";
export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_TOKEN:
			return {
				token: payload,
			};

		default:
			return state;
	}
};
