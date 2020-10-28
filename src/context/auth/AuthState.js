import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { SET_TOKEN } from "../Types";

const AuthState = props => {
	const incialState = {
		token: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, incialState);
	const setToken = token =>
		dispatch({
			type: SET_TOKEN,
			payload: token,
		});
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				setToken,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
