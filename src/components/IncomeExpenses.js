import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const totalIncome = transactions
    .filter((transaction) => transaction.amount >= 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const totalExpenses = Math.abs(
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0)
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-${totalExpenses}</p>
      </div>
    </div>
  );
};
