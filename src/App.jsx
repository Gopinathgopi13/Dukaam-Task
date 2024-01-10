import "./App.css";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Sidebar from "./Components/Sidebar";
import Transactions from "./Components/Transactions";
import "./Style/style.css";
function App() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <section className="payouts">
          <Navbar></Navbar>
          <Overview></Overview>
          <Transactions></Transactions>
        </section>
      </div>
    </>
  );
}

export default App;
