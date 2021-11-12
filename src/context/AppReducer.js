export default (state, action) => {
  switch (action.type) {
    case "delete":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "add":
      return { transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};
