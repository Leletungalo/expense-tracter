import React,{useState,useContext} from "react";
import Login from "./Login";
import { makeStyles } from "@material-ui/core";
import {Redirect} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import Register from "./Register";

const Home = () => {
	const {user} = useContext(AuthContext);
	const [register,setRegister] = useState(true);
	
	const classes = useStayles();
	if(user) return (<Redirect to="/dashboard" />);
	
	return (
		<div className={classes.wrap}>
			{register ? <Login setRegister={setRegister} /> : <Register />}
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
