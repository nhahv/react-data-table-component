import React from 'react';
import data from '../constants/sampleMovieData';
import DataTable from '../../src/index';

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: row => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: row => row.year,
		sortable: true,
	},
];

export const Basic = () => {
	const [pending, setPending] = React.useState(false);
	const [rows, setRows] = React.useState(data);

	// React.useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setRows(data);
	// 		setPending(false);
	// 	}, 20000);
	// 	return () => clearTimeout(timeout);
	// }, []);

	return (
		<>
			<button onClick={() => setPending(!pending)}>Loading...</button>
			<DataTable
				title="Movie List"
				persistTableHead
				columns={columns}
				data={rows}
				progressPending={pending}
				pagination
			/>
		</>
	);
};

export default {
	title: 'Loading/Basic',
	component: Basic,
};
