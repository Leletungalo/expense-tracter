import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import HistoryElement from "./HistoryElement";
import TransactionsContext from "../context/expenses-context/TransactionsContext";

const History = () => {
	const { transactions } = useContext(TransactionsContext);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h5">History</Typography>
			<div className={classes.container}>
				{transactions && transactions.map(element => {
					let positiveSign = null;
					if (element.newPrince > 0) positiveSign = true;
					else positiveSign = false;
					return (
						<HistoryElement
							key={element.id}
							id={element.id}
							title={element.title}
							price={Math.abs(element.newPrince)}
							positiveSign={positiveSign}
						/>
					);
				})
			}
			</div>
		</div>
	);
};

const useStyles = makeStyles({
	root:{
		width: "100%",
		height: "100%"
	},
	wrap: {
		padding: "1em",
	},
	container: {
		width: "100%",
		height: "30vh",
		overflowY: "scroll",
	},
});

export default History;
