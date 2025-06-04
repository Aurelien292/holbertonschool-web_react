import * as CRUD from '../crud';
import { RowID, RowElement } from '../interface';

// Mock console.log pour capturer les sorties pendant les tests
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  (console.log as jest.Mock).mockRestore();
});

describe('CRUD functions integration', () => {
  test('insertRow should return a number and log the inserted object', () => {
    const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };
    const returnedId: RowID = CRUD.insertRow(row);
    
    expect(typeof returnedId).toBe('number');
    expect(console.log).toHaveBeenCalledWith('Insert row', row);
  });

  test('updateRow should log the update and return the rowId', () => {
    const rowId: RowID = 125;
    const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

    const result = CRUD.updateRow(rowId, updatedRow);

    expect(result).toBe(rowId);
    expect(console.log).toHaveBeenCalledWith(`Update row ${rowId}`, updatedRow);
  });

  test('deleteRow should log the rowId', () => {
    const rowId: RowID = 125;
    
    CRUD.deleteRow(rowId);

    expect(console.log).toHaveBeenCalledWith('Delete row id', rowId);
  });
});
