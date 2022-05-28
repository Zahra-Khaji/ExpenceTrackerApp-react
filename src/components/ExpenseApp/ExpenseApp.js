import { useState } from "react";
import Transactions from "../Transactions/Transactions";
import OverView from "../OverView/OverView";
import style from "./expenseApp.module.css";


const ExpenseApp = () => {

    const [transactions,setTransactions] = useState([]);

    return ( 
        <section className={style.appContainer} >
            <OverView/>
            <Transactions transactions={transactions}/>
        </section>
     );
}
 
export default ExpenseApp;