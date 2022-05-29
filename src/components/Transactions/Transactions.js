import style from "./transactions.module.css";

const Transactions = ({transactions}) => {
    return ( 
        <section >
            {transactions.length && transactions.map((t)=>(
                <div className={style.transaction} key={t.id} style={{borderRight:t.type === "expense" && "4px solid red"}}>
                    <span>{t.desc}</span>
                    <span>${t.amount}</span>

                  
                </div>
            ))}
        </section>
     );
}
 
export default Transactions;