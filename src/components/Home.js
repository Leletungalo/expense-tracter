import React,{useEffect,useState,useContext} from "react";
import Login from "./Login";
import { makeStyles } from "@material-ui/core";
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext"

const Home = () => {
	const {setUser} = useContext(AuthContext);
	const [isUser, setIsUser] = useState(false);
	const classes = useStayles();
	useEffect(() => {
		projectAuth.onAuthStateChanged(user => {
			if(user){
				setUser(user.user)
				setIsUser(true);
			}
		})
	})
	if(isUser) return (<Redirect to="/dashboard" />);

	
	return (
		<div className={classes.wrap}>
			<Login />
		</div>
	);
};

const useStayles = makeStyles({
	wrap: {
		backgroundColor: "grey",
		height: "100vh",
		overflow: "hidden",
	},
});

export default Home;
