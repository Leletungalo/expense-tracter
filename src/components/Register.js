import React, {useContext}  from "react";
import AuthContext from "../context/auth/AuthContext";
import {
	Paper,
	Typography,
	TextField,
	Toolbar,
	makeStyles,
} from "@material-ui/core";

const Register = () => {
	const {signUp} = useContext(AuthContext);
	const haddleSubmit = async event => {
		event.preventDefault();
		const name = event.target["name"].value;
		const email = event.target["email"].value;
		const password = event.target["password"].value;
		if(email !== "" && password !== ""){
			signUp(email,password,name);
		}
	}
	const classes = useStyles();
	return (
		<Paper className={classes.Paper}>
			<Paper className={classes.header}>
				<Toolbar>
					<Typography variant="h4">Register</Typography>
				</Toolbar>
			</Paper>
			<form onSubmit={haddleSubmit} className={classes.myForm}>
				<TextField name="name" className={classes.input} label="Name" />
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
				<TextField className={classes.submit} type="submit" />
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
		width: "80%",
		borderRadius: "10px",
		backgroundColor: "#00bfff",
		border: "none",
		outline: "none",
	},
});

export default Register;
