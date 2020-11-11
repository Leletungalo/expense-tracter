import React,{useContext} from "react";
import { AppBar, Typography, makeStyles, Toolbar, IconButton } from "@material-ui/core";
import AuthContext from "../context/auth/AuthContext"

const Header = () => {
	const {signOut} = useContext(AuthContext);
	const classes = useStyles();
	
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
					signOut()
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
