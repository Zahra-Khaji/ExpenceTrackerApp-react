import { useEffect, useState } from "react";
import Transactions from "../Transactions/Transactions";
import OverView from "../OverView/OverView";
import style from "./expenseApp.module.css";


const ExpenseApp = () => {

    const [transactions,setTransactions] = useState([]);
    const [expense,setExpense] = useState(0);
    const [income,setIncome] = useState(0);
    const addTransaction = (transaction) => {
        setTransactions([...transactions,{...transaction,id:Date.now()}]);
    }
    useEffect(()=>{
        let inc = 0;
        let exp = 0;
        transactions.map(t => {
            if(t.type === "expense")
                exp += parseFloat(t.amount);
            else
                inc += parseFloat(t.amount);
        });
        setIncome(inc);
        setExpense(exp);
    

    },[transactions])

    return ( 
        <section className={style.appContainer} >
            <OverView income={income} expense={expense} addTransaction={addTransaction}/>
            <Transactions transactions={transactions}/>
        </section>
     );
}
 
export default ExpenseApp;