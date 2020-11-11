import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Icons from "./components/temp";
import Dashboard from "./components/Dashboard";

import Home from "./components/Home";
import Header from "./components/Header"
import AuthState from "./context/auth/AuthState";
import TransactionsState from "./context/expenses-context/TransactionsState";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<AuthState>
			<TransactionsState>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" >
							<Home />
						</Route>
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<Route exact path="/icons" component={Icons} />
					</Switch>
				</Router>
			</TransactionsState>
		</AuthState>
	);
}

export default App;
