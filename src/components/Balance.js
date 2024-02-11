import React from 'react';

const Balance = ({ transactions }) => {
    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((total, transaction) => total + transaction.amount, 0);

    const totalExpenses = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = totalIncome - totalExpenses;

    return (
        <div className="balance">
            <div>
                <div className="in-ex-area">
                    <div className="in-ex">
                        <div>Toplam Gelir: <span className="green">{totalIncome}TL</span></div>
                        <div>Toplam Gider: <span className="red">{totalExpenses}TL</span></div>
                    </div>
                    <div className="total-bal">
                        <div>Net Bakiye : <span className="green">{balance >= 0 ? ` ${balance.toFixed(2)}TL` : `-${Math.abs(balance).toFixed(2)}TL`}</span></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;