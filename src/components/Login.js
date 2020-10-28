import React, { useContext, useState } from "react";
import AuthContext from "../context/auth/AuthContext";
import {
	Paper,
	Typography,
	TextField,
	Toolbar,
	makeStyles,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Register = () => {
	const [valiedUser, setValiedUser] = useState("");
	const { setToken } = useContext(AuthContext);
	const haddleSubmit = async event => {
		event.preventDefault();
		const name = event.target["name"].value;
		const email = event.target["email"].value;
		const password = event.target["password"].value;

		const data = {
			name,
			email,
			password,
		};
		try {
			const res = await fetch("http://localhost:4001/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const tojson = await res.json();
			setToken(tojson.token);
			setValiedUser("ewe");
		} catch (error) {
			console.error("token error", error);
		}
	};
	const classes = useStyles();
	if (valiedUser === "ewe") return <Redirect to="/icons" />;
	return (
		<Paper className={classes.Paper}>
			<Paper className={classes.header}>
				<Toolbar>
					<Typography variant="h4">Log in</Typography>
				</Toolbar>
			</Paper>
			<form onSubmit={haddleSubmit} className={classes.myForm}>
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
