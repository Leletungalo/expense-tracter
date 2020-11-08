import React,{useState} from "react";
import { AppBar, Typography, makeStyles, Toolbar, IconButton } from "@material-ui/core";
import {projectAuth} from "../firebase/config";
import {Redirect} from "react-router-dom"

const Header = () => {
	const classes = useStyles();
	const [signedOut,setSignedOut] = useState(false);
	if(signedOut)
		return (<Redirect to="/" />);
	else
	return (
		<AppBar  
			className={classes.root}
			position="sticky" 
			color="secondary">
			<Toolbar className={classes.toolBar}>
			<Typography variant="h4">Expense tracker </Typography>
			<IconButton 
				className={classes.login}
				onClick={() => {
					projectAuth.signOut();
					setSignedOut(true);
				}}
				>
				<Typography  variant="h6">Log out</Typography>
			</IconButton>
			</Toolbar>
		</AppBar>
	);
};

const useStyles = makeStyles(theme => ({
	root:{
		padding:"0",
		display:"flex"
	},
	login:{
		padding:".5em",
		marginLeft:"auto"
	}
}))

export default Header;
