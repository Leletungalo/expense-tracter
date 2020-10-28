import React, { useReducer } from "react";
import TransactionsContext from "./TransactionsContext";
import TransactionsReducer from "./TransactionsReducer";

import { ADD_TRANSACTION, GET_TRANSACTIONS } from "../Types";
const TransactionsState = props => {
	const incialState = {
		transactions: []
	};
	const [state, disparch] = useReducer(TransactionsReducer, incialState);
	
	const getTransactions = (transData) => {
		disparch({
			type: GET_TRANSACTIONS,
			payload: transData
		})
	}
	
	const addTransaction = trans => {
		disparch({
			type: ADD_TRANSACTION,
			payload: trans,
		});
	};
	return (
		<TransactionsContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				getTransactions
			}}
		>
			{props.children}
		</TransactionsContext.Provider>
	);
};
export default TransactionsState;
