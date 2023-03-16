import { AppRouter } from "../components/app.router/app.router";
import { Header } from "../components/header/header";
import { Menu, menuOptions } from "../components/menu/menu";

function App() {
  return (
    <div className="App">
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
