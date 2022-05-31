import { useEffect, useState } from "react";
import style from "./transactions.module.css";

const Transactions = ({transactions}) => {
    const [searchItem,setSerachItem] = useState("");
    const [filterdeTnx,setFilterdeTnx] = useState(transactions);
    const filterTnx = (search) => {
        if(search === ""){
            setFilterdeTnx(transactions);
            return;
        }
        const filtered = transactions.filter(t => t.desc.toLowerCase().includes(search.toLowerCase()));
        setFilterdeTnx(filtered)


    };
    const searchHandler = (e) => {
        setSerachItem(e.target.value);
        filterTnx(e.target.value);

    }
    useEffect(()=>{
        filterTnx(searchItem);
    },[transactions])
    return ( 
        <section>
           {transactions.length ? <input type="text" value={searchItem}
             onChange={searchHandler} 
             className={style.serachInput}
             placeholder="جستجو"
             /> : ""}
            { filterdeTnx.map((t)=>(
                <div className={style.transaction} key={t.id} style={{borderRight:t.type === "expense" && "4px solid red"}}>
                    <span>{t.desc}</span>
                    <span>{t.amount} تومان</span>
                </div>
            ))}
        </section>
     );
}
 
export default Transactions;