import React, { useReducer,useEffect } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {projectAuth} from "../../firebase/config"
import { SET_USER } from "../Types";

const AuthState = props => {
	const incialState = {
		user: null,
	};
	const [state, dispatch] = useReducer(AuthReducer, incialState);
	useEffect(() => {
		projectAuth.onAuthStateChanged(user => {
			dispatch({
				type: SET_USER,
				payload: user
			})
		})
	},[]);

	const login = async (email,password) => {
		try {
			const user = await projectAuth.signInWithEmailAndPassword(email,password);
			dispatch({
				type: SET_USER,
				payload: user.user
			})
		} catch (error) {
			console.log(error);
		}
	}
	//@ts-ignore
	const signUp = async (email,password,name) => {
		try {
			const user = await projectAuth.createUserWithEmailAndPassword(email,password);
			dispatch({
				type: SET_USER,
				payload: user.user
			})
		} catch (error) {
			console.log(error)
		}
	}

	const signOut = async () => {
		await projectAuth.signOut();
		dispatch({
			type: SET_USER,
			payload: null
		})
	}

	const setUser = user => dispatch({
		type: SET_USER,
		payload: user
	})

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				setUser,
				login,
				signUp,
				signOut
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
