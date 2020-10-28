import React from "react";
import Header from "./Header";
import Login from "./Login";
import { makeStyles } from "@material-ui/core";
const Home = () => {
	
	const classes = useStayles();
	return (
		<div className={classes.wrap}>
			<Header />
			<Login />
		</div>
	);
};

const useStayles = makeStyles({
	wrap: {
		backgroundColor: "grey",
		height: "100vh",
		overflow: "hidden",
	},
});

export default Home;
