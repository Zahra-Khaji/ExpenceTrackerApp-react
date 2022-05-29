import { useState } from "react";
import style from "./overView.module.css";
import TransactionForm from "../TransactionForm/TransactionForm";

const OverView = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow] = useState(false);
    return ( 
        <section className={style.container}>
            <div className={style.topSection}>
                <p>Balance : {income - expense}</p>
                <button  className={`${style.btn} ${isShow && style.cancel }`} onClick={()=>setIsShow((prevState)=>!prevState)}>
                    {isShow ? "cancel" : "add"}
                </button>
            </div>
            {isShow && <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            <div className={style.middleSection}>
                <div className={style.expenseBox}>expense<span style={{color:"red"}}>{expense} $</span> </div>
                <div className={style.expenseBox}>income<span>{income} $</span> </div>
            </div>
        </section>
     );
}
 
export default OverView;