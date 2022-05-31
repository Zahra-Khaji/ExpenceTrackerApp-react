import { useState } from "react";
import style from "./overView.module.css";
import TransactionForm from "../TransactionForm/TransactionForm";

const OverView = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow] = useState(false);
    return ( 
        <section className={style.container}>
            <div className={style.topSection}>
                <p className={style.text}>مانده:  <span style={{direction:"ltr",marginLeft:"0.3rem",marginRight:"0.5rem"}}>{income - expense}</span> تومان</p>
              <span className={`${style.iconholder} ${isShow && style.iconCancelHolder}`} 
               onClick={()=>setIsShow((prevState)=>!prevState)}
               title={isShow ? "انصراف" : "اضافه کردن تراکنش"}
               >
                {isShow ? (     
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>) : (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                         </svg>
                )}
              </span>
            </div>
            {isShow && <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
            <div className={style.middleSection}>
                <div className={style.expenseBox}>مجموع هزینه:<span style={{color:"red",marginTop:"0.75rem"}}>{expense}تومان</span> </div>
                <div className={style.expenseBox}>مجموع درآمد:<span style={{marginTop:"0.75rem"}}>{income}تومان</span></div>
            </div>
        </section>
     );
}
 
export default OverView;