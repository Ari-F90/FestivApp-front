import { Header } from "../components/header/header";
import { Login } from "../components/login/login";
import { Menu, menuOptions } from "../components/menu/menu";
import { Register } from "../components/register/register";

function App() {
  return (
    <div className="App">
      <span hidden>Learn</span>
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>

      <Register></Register>
      <Login></Login>
    </div>
  );
}

export default App;
