import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Icons from "./components/temp";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register"

import AuthState from "./context/auth/AuthState";
import TransactionsState from "./context/expenses-context/TransactionsState";
import Header from "./components/Header";
function App() {
	return (
		<AuthState>
			<TransactionsState>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/" >
							<Register />
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
