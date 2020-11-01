import React,{useContext,useEffect} from "react";
import { makeStyles,Grid } from "@material-ui/core";

import Balance from "./Balance";
import History from "./History";
import AddTransactions from "./AddTransactions";

import TransactionsContext from "../context/expenses-context/TransactionsContext"
import {UseFirestore} from "../hooks/UseFirestore";

const Dashboard = () => {
	const {docs} = UseFirestore("month1");
	const {getTransactions} = useContext(TransactionsContext);
	useEffect(() => {
		getTransactions(docs);
		// eslint-disable-next-line
	},[docs])
	
	const classes = useStyles();
	return (
		<>
			<Grid container spacing={2} className={classes.wrap}>
				<Grid item xs={1}  ></Grid>
					<Grid container spacing={2} item xs={10}  >
						<Grid item xs={12} md={6}>
							<Balance />
						</Grid>
						<Grid item xs={12} md={6} >
							<History />
						</Grid>
						<Grid item md={12}>
							<AddTransactions />
						</Grid>
					</Grid>
				<Grid item xs={1}  ></Grid>
			</Grid>
		</>
	);
};

const useStyles = makeStyles({
	wrap: {
		padding: " 1em",
		display: "flex",
		justifyContent: "space-between",
	},
});

export default Dashboard;
