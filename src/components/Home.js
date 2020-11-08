import React,{useEffect,useState,useContext} from "react";
import Login from "./Login";
import { makeStyles } from "@material-ui/core";
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import Header from "./Header";
import Register from "./Register";

const Home = () => {
	const {setUser} = useContext(AuthContext);
	const [isUser, setIsUser] = useState(false);
	const [register,setRegister] = useState(false);
	useEffect(() => {
		projectAuth.onAuthStateChanged(user => {
			if(user){
				setUser(user.user)
				setIsUser(true);
			}
		})
	})

	const classes = useStayles();
	if(isUser) return (<Redirect to="/dashboard" />);
	
	return (
		<div className={classes.wrap}>
			<Header />
			{register ? <Register /> : <Login setRegister={setRegister} />}
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
