import React from "react";
import Balance from "./Balance";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineDescription } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";

const Home = (props) => {
  return (
    <div className="page-container">
        <div className="balance">
      <Balance transactions={props.transactions} />
      </div>
      <div className="list">
      <h3 className="explain">
        {props.transactions.length > 0
          ? "Geçmiş Eklemeler"
          : "Şu anda herhangi bir geliriniz veya gideriniz yok. Gelir/Gider sayfalarından bir miktar ekleyin"}
      </h3>
      <div className="history">
        <FaMoneyBill />
        <MdOutlineDescription />
        <FiCalendar />
      </div>
      <ul className="trackerList">
        {props.transactions.map((transaction, index) => (
          <li key={index} className="trackerlist-li">
            <div>
              {" "}
              {transaction.amount}TL{" "}
              <span className={transaction.type}>{transaction.type}</span>
            </div>{" "}
            <div>{transaction.desc}</div> <div> {transaction.date}</div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Home;
