import React from "react";
import { AppBar, Typography, makeStyles } from "@material-ui/core";

const Header = () => {
	const classes = useStyles()
	return (
		<AppBar  
			className={classes.root}
			position="sticky" 
			color="primary">
			<Typography variant="h4">Expense tracker</Typography>
		</AppBar>
	);
};

const useStyles = makeStyles({
	root:{
		padding:"1em 2em"
	},
	delete:{
		display:"inline-block"
	}
})

export default Header;
