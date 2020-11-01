import React from "react";
import { makeStyles, Typography, Paper, IconButton } from "@material-ui/core";
import {DeleteOutlineOutlined} from "@material-ui/icons";
import {projectDatabese} from "../firebase/config"
const HistoryElement = ({id, title, price, positiveSign }) => {
	const classes = useStyles(positiveSign);
	const onDelete = () => {
		try {
			projectDatabese.collection("month1")
            .doc(id)
            .delete();
            console.log("document succefully deleted");
        } catch (error) {
            console.error(error)
        }
	}
	
	return (
		<Paper className={classes.wrap}>
			<IconButton onClick={onDelete}>
				<DeleteOutlineOutlined />
			</IconButton>
			<Typography variant="h5">{title}</Typography>
			<Typography className={classes.price}>R {price}</Typography>
		</Paper>
	);
};

const useStyles = makeStyles({
	wrap: {
		width: "100%",
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
