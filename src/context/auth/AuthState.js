import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { SET_USER } from "../Types";

const AuthState = props => {
	const incialState = {
		user: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, incialState);
	const setUser = user => dispatch({
		type: SET_USER,
		payload: user
	})


	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				setUser
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
