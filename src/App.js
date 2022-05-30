import "./App.css";
import ExpenseApp from "./components/ExpenseApp/ExpenseApp";
const App = () => {
    return ( 
        <div className="App">
            <header>
                <h1>تراکنش های روزانه</h1>
            </header>
            <ExpenseApp/>


        </div>
     );
}
 
export default App;