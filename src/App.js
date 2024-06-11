import logo from "./logo.svg";
import "./App.css";
import "./store";
import Form from "./Form";
import Account from "./Account";
import MainApp from "./mddleware/MainApp";
function App() {
  return (
    <div className="App">
      <Form />
      <Account />
      {/* <MainApp /> */}
    </div>
  );
}

export default App;
