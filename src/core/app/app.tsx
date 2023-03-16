import { Header } from "../components/header/header";
import { Login } from "../components/login/login";
import { Register } from "../components/register/register";

function App() {
  return (
    <div className="App">
      <span hidden>Learn</span>
      <Header></Header>
      <Register></Register>
      <Login></Login>
    </div>
  );
}

export default App;
