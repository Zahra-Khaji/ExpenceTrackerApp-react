import { useState } from "react";
import style from "./overView.module.css";

const OverView = () => {
    const [expense,setExpense] = useState(0);
    const [income,setIncome] = useState(0);
    return ( 
        <section className={style.container}>
            <div className={style.topSection}>
                <p>Balance : {income - expense}</p>
                <button>add</button>
            </div>
            <div className={style.middleSection}>
                <div>expense {expense}</div>
                <div>income {income}</div>
            </div>
        </section>
     );
}
 
export default OverView;