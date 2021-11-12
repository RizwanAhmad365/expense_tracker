const Transaction = ({ transaction }) => {
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{`${transaction.amount < 0 ? "" : "+"}${
        transaction.amount
      }$`}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
