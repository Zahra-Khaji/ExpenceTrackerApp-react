import { useState } from "react";
import style from "./transactionForm.module.css";

const TransactionForm = ({addTransaction,setIsShow}) => {
    const [transaction,setTransaction] = useState({desc:"",amount:"",type:"expense"});
    const changeHandler = (e) => {
        setTransaction({...transaction,[e.target.name]:e.target.value});


    }
    const submitHandler = (e) => {
        e.preventDefault();
        addTransaction(transaction);
        setIsShow(false);


    }
    return ( 
        <form className={style.transactionForm} onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} 
            value={transaction.desc}
            placeholder="description"
            />
            <input type="number" name="amount" onChange={changeHandler}
             value={transaction.amount}
             placeholder="amount"
             />
            <div className={style.radioBox}>
                <input type="radio" id="expense" name="type" value="expense"
                 onChange={changeHandler} checked={transaction.type==="expense"}
                 />
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="income"
                 onChange={changeHandler} checked={transaction.type==="income"}
                />
                <label htmlFor="income">Income</label>
            </div>
            <button type="submit"  className={`${style.btn} ${style.primary}`} >Add Transaction</button>

        </form>
     );
}
 
export default TransactionForm;