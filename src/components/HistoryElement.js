import React from "react";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const HistoryElement = ({ title, price, positiveSign }) => {
	const classes = useStyles(positiveSign);

	return (
		<Paper className={classes.wrap}>
			<Typography variant="h5">{title}</Typography>
			<Typography className={classes.price}>R {price}</Typography>
		</Paper>
	);
};

const useStyles = makeStyles({
	wrap: {
		position:"relative",
		display: "flex",
		alignItems: "center",
		borderRight: positiveSign =>
			positiveSign ? "green 5px solid" : "red 5px solid",
		padding: ".5em",
		margin: "1em 0",
		borderRadius: "0",
	},
	price:{
		position:"absolute",
		top:"50%",
		right:"1em",
		transform: "translateY(-50%)"
	}
});

export default HistoryElement;
