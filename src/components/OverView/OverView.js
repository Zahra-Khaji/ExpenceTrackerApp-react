import { useState } from "react";
import style from "./overView.module.css";
import TransactionForm from "../TransactionForm/TransactionForm";

const OverView = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow] = useState(false);
    return ( 
        <section className={style.container}>
            <div className={style.topSection}>
                <p className={style.text}>مانده: {income - expense} تومان</p>
                <button  className={`${style.btn} ${isShow && style.cancel }`} onClick={()=>setIsShow((prevState)=>!prevState)}>
                    {isShow ? "انصراف" : "اضافه کردن تراکنش"}
                </button>
            </div>
            {isShow && <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            <div className={style.middleSection}>
                <div className={style.expenseBox}>مجموع هزینه:<span style={{color:"red"}}>{expense} تومان</span> </div>
                <div className={style.expenseBox}>مجموع درآمد:<span>{income} تومان</span></div>
            </div>
        </section>
     );
}
 
export default OverView;