import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineDescription } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";

const ExpensesPage = ({ transactions, addTransaction }) => {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (expenseAmount !== "" && date !== "" && desc !== "") {
      const newExpense = {
        id: Math.round(Math.random() * 999999),
        date: date,
        desc: desc,
        type: "expense",
        amount: parseFloat(expenseAmount),
      };
      addTransaction(newExpense);
      setExpenseAmount("");
      setDate("");
      setDesc("");
    }
  };

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="page-container">
      <div className="form">
        <h1>Giderler</h1>
        <form onSubmit={handleAddExpense}>
          <input
            className="input"
            type="number"
            required
            placeholder="Gider miktarını giriniz.."
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <input
            className="input"
            placeholder="Açıklama giriniz.."
            required
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            className="input"
            required
            type="date"
            placeholder="Tarih giriniz.."
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button className="income-btn" type="submit">
            Gider ekle
          </button>
        </form>
      </div>
      <div className="list">
        <h3 className="history-title">Eklenen Giderler</h3>

        <ul className="trackerList">
          <div className="history">
            <GiPayMoney />
            <MdOutlineDescription />
            <FiCalendar />
          </div>
          {transactions.map(
            (transaction, index) =>
              transaction.type === "expense" && (
                <li key={index} className="trackerlist-li">
                  <span className={transaction.type}>
                    -{transaction.amount}TL
                  </span>{" "}
                  <p> {transaction.desc}</p> <p> {transaction.date}</p>
                </li>
              )
          )}
        </ul>
      </div>
      <h3 className="total">Toplan Gider: {totalExpenses}TL</h3>
    </div>
  );
};

export default ExpensesPage;
