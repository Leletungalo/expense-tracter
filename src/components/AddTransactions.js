import React, { useState, useContext } from "react";
import {
	Typography,
	TextField,
	Button,
	Checkbox,
	makeStyles,
} from "@material-ui/core";
import { projectDatabese, timestamp } from "../firebase/config";
import AuthContext from "../context/auth/AuthContext";

const AddTransactions = () => {
	const { user } = useContext(AuthContext);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [expense, setExpense] = useState(true);
	const [income, setIncome] = useState(false);

	const haddleChange = async () => {
		if (title !== "" && price !== "") {
			let newPrince = +price;
			if (expense) {
				newPrince *= -1;
			}
			try {
				const createdAt = timestamp();
				// eslint-disable-next-line
				const added = await projectDatabese.collection(user.email).add({
					title,
					newPrince,
					createdAt,
				});
				setPrice("");
				setTitle("");
			} catch (err) {
				console.log(err);
			}
		}
	};

	const haddleCheck = event => {
		if (event.target.name === "Income") {
			setIncome(event.target.checked);
			setExpense(!event.target.checked);
		} else if (event.target.name === "Expense") {
			setIncome(!event.target.checked);
			setExpense(event.target.checked);
		}
	};
	const classes = useStayles();
	return (
		<form>
			<Typography className={classes.heading} variant="h5">
				Add a transaction
			</Typography>
			<div className={classes.checkwrap}>
				<Checkbox
					checked={income}
					name="Income"
					onChange={haddleCheck}
				/>
				<Typography variant="h6">Inome</Typography>
				<Checkbox
					checked={expense}
					name="Expense"
					onChange={haddleCheck}
				/>
				<Typography variant="h6">Expense</Typography>
			</div>
			<TextField
				className={classes.inputs}
				fullWidth
				onChange={e => setTitle(e.target.value)}
				value={title}
				label="Enter a discription"
			/>
			<TextField
				className={classes.inputs}
				fullWidth
				onChange={e => setPrice(e.target.value)}
				value={price}
				label="Enter a amount"
			/>
			<Button
				fullWidth
				variant="contained"
				color="secondary"
				onClick={haddleChange}
			>
				Add
			</Button>
		</form>
	);
};

const useStayles = makeStyles({
	heading: {
		display: "inline-block",
	},
	checkwrap: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputs: {
		margin: "1em",
	},
});

export default AddTransactions;
