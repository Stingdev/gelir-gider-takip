import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineDescription } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const IncomePage = ({ transactions, addTransaction }) => {
  const [incomeAmount, setIncomeAmount] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (incomeAmount !== "" && date !== "" && desc !== "") {
      const newIncome = {
        id: Math.round(Math.random() * 999999),
        date: date,
        desc: desc,
        type: "income",
        amount: parseFloat(incomeAmount),
      };
      addTransaction(newIncome);
      setIncomeAmount("");
      setDate("");
      setDesc("");
    }
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="page-container">
      <div className="form">
        <h1>Gelirler</h1>
        <form onSubmit={handleAddIncome}>
          <input
            className="input"
            required
            placeholder="Gelir miktarını giriniz.."
            type="number"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
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
          <button className="submit-btn" type="submit">
            Gelir Ekle
          </button>
        </form>
      </div>
      <div className="list">
        <h3 className="history-title">Eklenen Gelirler</h3>
        <div className="history">
          <GiReceiveMoney />
          <MdOutlineDescription />
          <FiCalendar />
        </div>

        {
          <ul className="trackerList">
            {transactions.map(
              (transaction, index) =>
                transaction.type === "income" && (
                  <li key={index} className="trackerlist-li">
                    <span className={transaction.type}>
                      +{transaction.amount}TL
                    </span>{" "}
                    <p> {transaction.desc}</p> <p> {transaction.date}</p>
                  </li>
                )
            )}
          </ul>
        }
      </div>
      <h3 className="total">Toplam Gelir: {totalIncome}TL</h3>
    </div>
  );
};

export default IncomePage;
