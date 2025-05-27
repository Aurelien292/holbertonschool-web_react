import { RowID, RowElement } from './interface';

import * as CRUD from './crud';

const row : RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',}

	const newrowID: RowID = CRUD.insertRow(row);

	const updatedRow: RowElement = {
	...row,
	age: 23,
};

CRUD.updateRow(125,{firstName: 'Guillaume',lastName: 'Salva', age : 23 });

CRUD.deleteRow(125);