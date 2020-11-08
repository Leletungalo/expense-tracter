import React, { useContext, useState } from "react";
import {
	Paper,
	Typography,
	TextField,
	Toolbar,
	makeStyles,
	Button
} from "@material-ui/core";
import {projectAuth} from "../firebase/config";
import AuthContext from "../context/auth/AuthContext"
import { Redirect } from "react-router-dom";

const Login = ({setRegister}) => {
	const {setUser} = useContext(AuthContext);
	const [isLoged, setIsiLoged] = useState(false);

	const haddleSubmit = async event => {
		const form = document.querySelector("form");
		const email = form["email"].value;
		const password = form["password"].value;
		try {
			if(email !== "" && password !== ""){
				const user = await projectAuth.signInWithEmailAndPassword(email,password);
				console.log(user.user);
				setUser(user.user);
				setIsiLoged(true);
			}
		} catch (error) {
			console.log(error);
		}
	}
	const classes = useStyles();
	if (isLoged) return <Redirect to="/dashboard" />;
	return (
		<Paper className={classes.Paper}>
			<Paper className={classes.header}>
				<Toolbar>
					<Typography variant="h4">Log in</Typography>
				</Toolbar>
			</Paper>
			<form className={classes.myForm}>
				<TextField
					name="email"
					className={classes.input}
					label="Email"
				/>
				<TextField
					name="password"
					className={classes.input}
					label="password"
				/>
					<Button 
						variant="contained" 
						color="primary" 
						onClick={haddleSubmit}
						className={classes.submit} >Submit</Button>
					<Button 
						variant="contained" 
						color="secondary" 
						onClick={() => setRegister(true)}
						className={classes.register}>register</Button>
				
			</form>
		</Paper>
	);
};

const useStyles = makeStyles({
	Paper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		margin: "20vh auto",
	},
	header: {
		width: "100%",
	},
	myForm: {
		textAlign: "center",
		padding: "1.2em",
	},
	input: {
		width: "80%",
		margin: "1.2em",
	},
	submit: {
		borderRadius: "10px",
		outline: "none",
		padding:".5em 1em"
	},
	register:{
		border: "none",
		outline: "none",
		margin: "0 2em"
	}
});

export default Login;
