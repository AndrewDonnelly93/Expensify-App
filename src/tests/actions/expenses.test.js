// import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// test('should setup remove expense action object', () => {
//   const action = removeExpense({ id: '123abc' });
//   // For checking objects and arrays
//   expect(action).toEqual({
//     type: 'REMOVE_EXPENSE',
//     id: '123abc',
//   });
// });
//
// test('should setup edit expense action object', () => {
//   const action = editExpense('123abc', { note: 'New note' });
//   expect(action).toEqual({
//     type: 'EDIT_EXPENSE',
//     id: '123abc',
//     updates: { note: 'New note' },
//   });
// });
//
// test('should setup add expense action object with provided values', () => {
//   const expenseData = {
//     description: 'Rent',
//     amount: 1095.00,
//     createdAt: 1000,
//     note: 'This  was last month\'s rent',
//   };
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//     },
//   });
// });

test('should setup add expense action object with default values', () => {

});
