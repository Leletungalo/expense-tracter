import React,{useContext,useState,useEffect} from "react";
import { Typography, Paper, Grid, makeStyles } from "@material-ui/core";
import TransactionsContext from "../context/expenses-context/TransactionsContext"

const Balance = () => {
	const {transactions} = useContext(TransactionsContext);
	const [total, setTotal] = useState(0);
	const [totalIcome, setTotalIncome] = useState(0);
	const [totalExpense, setTotalExpense] = useState(0);
	
	useEffect(() => {
		let tempTotal = 0; 
		let tempIncome = 0;
		let tempExpense = 0;
		transactions.forEach(element => {
			const {newPrince} = element;
			console.log(newPrince)
			tempTotal += newPrince;
			if(newPrince > 0){
				tempIncome += newPrince;
			}else{
				tempExpense += newPrince;
			}
		});
		setTotalExpense(tempExpense);
		setTotal(tempTotal);
		setTotalIncome(tempIncome);
	},[transactions])

	const classes = useStyles();
	return (
		<Paper className={classes.wrap}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h5">YOUR BALANCE</Typography>
					<Typography>{total}</Typography>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={5}>
					<Paper className={classes.div}>
						<Typography>INCOME</Typography>
						<span>R{" " + totalIcome}</span>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<Paper className={classes.div}>
						<Typography>EXPENSE</Typography>
						<span>R {" " + totalExpense}</span>
					</Paper>
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</Paper>
	);
};

const useStyles = makeStyles({
	wrap: {
		padding: "1em",
		width:"100%",
		height: "100%"
	},
	div: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: ".6em",
		backgroundColor: "#e6e6e6",
	},
});

export default Balance;
