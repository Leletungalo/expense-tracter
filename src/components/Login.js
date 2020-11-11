import React, { useContext } from "react";
import {
	Paper,
	Typography,
	TextField,
	Toolbar,
	makeStyles,
	Button
} from "@material-ui/core";
import AuthContext from "../context/auth/AuthContext";

const Login = ({setRegister}) => {
	const {login} = useContext(AuthContext);

	const haddleSubmit = () => {
		const form = document.querySelector("form");
		const email = form["email"].value;
		const password = form["password"].value;
		if(email !== "" && password !== ""){
			login(email,password);
		}
	}
	const classes = useStyles();
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
				<div>
					<Button 
						variant="contained" 
						color="primary" 
						onClick={haddleSubmit}
						className={classes.submit} >Submit</Button>
					<Button 
						variant="contained" 
						color="secondary" 
						onClick={() => setRegister(false)}
						className={classes.register}>
							register
					</Button>
				</div>
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
