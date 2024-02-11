import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ExpensesPage from "./components/ExpensesPage";
import Header from "./components/Header";
import Home from "./components/Home";
import IncomePage from "./components/IncomePage";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                transactions={transactions}
                addTransaction={addTransaction}
              />
            }
          />
          <Route
            path="/income"
            element={
              <IncomePage
                transactions={transactions}
                addTransaction={addTransaction}
              />
            }
          />

          <Route
            path="/expenses"
            element={
              <ExpensesPage
                transactions={transactions}
                addTransaction={addTransaction}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
