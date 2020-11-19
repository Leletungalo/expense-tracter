import React, { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import {
	Paper,
	Typography,
	TextField,
	Toolbar,
	makeStyles,
	Button,
} from "@material-ui/core";

const Register = ({ setRegister }) => {
	const { signUp } = useContext(AuthContext);
	const haddleSubmit = async event => {
		event.preventDefault();
		const name = event.target["name"].value;
		const email = event.target["email"].value;
		const password = event.target["password"].value;
		if (email !== "" && password !== "") {
			signUp(email, password, name);
		}
	};
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
				<di>
					<TextField className={classes.submit} type="submit" />
					<Button
						variant="contained"
						color="secondary"
						onClick={() => setRegister(true)}
					>
						Already have Account
					</Button>
				</di>
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
		width: "40%",
		borderRadius: "10px",
		backgroundColor: "#00bfff",
		border: "none",
		outline: "none",
		margin: " 0 1em",
	},
});

export default Register;
