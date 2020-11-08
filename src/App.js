import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Icons from "./components/temp";
import Dashboard from "./components/Dashboard";

import Home from "./components/Home"
import AuthState from "./context/auth/AuthState";
import TransactionsState from "./context/expenses-context/TransactionsState";

function App() {
	return (
		<AuthState>
			<TransactionsState>
				<Router>
					<Switch>
						<Route exact path="/" >
							<Home />
						</Route>
						<Route exact path="/dashboard" >
							<Dashboard />
						</Route>
						<Route exact path="/icons" component={Icons} />
					</Switch>
				</Router>
			</TransactionsState>
		</AuthState>
	);
}

export default App;
