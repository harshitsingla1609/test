import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const AllTransaction = () => {
	const [transactions, setTransactions] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const response = await fetch('api/get-transactions', {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				setTransactions(data);
			} catch (error) {
				console.log('Error fetching transactions: ', error);
			}
		};
		fetchTransactions();
	}, []);

	console.log(transactions, 'transactionstransactions');
	return (
		<div className="transaction-table">
			<table>
				<thead>
					<tr className="">
						<th>Transactions</th>
						<th>
							<button
								style={{ cursor: 'pointer' }}
								onClick={() => navigate('/add-transation')}
							>
								Add Transaction
							</button>
						</th>
					</tr>
					<tr className="header-row">
						<th className="column-cell">Date</th>
						<th className="column-cell">Description</th>
						<th className="column-cell">Credit</th>
						<th className="column-cell">Debit</th>
						<th className="column-cell">Running Balance</th>
					</tr>
				</thead>
				<tbody>
					{transactions?.length !== 0 &&
						transactions?.map((item) => (
							<tr key={item._id} className="header-row">
								<td className="data-cell">
									{moment(item.createdAt).format('DD/MM/YYYY hh:mm a')}
								</td>
								<td className="data-cell">{item.desc}</td>
								<td className="data-cell">
									{item.type === 'credit' ? item.amount : '-'}
								</td>
								<td className="data-cell">
									{item.type === 'debit' ? item.amount : '-'}
								</td>
								<td className="data-cell">{item.balance}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default AllTransaction;
