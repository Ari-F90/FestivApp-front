import { AppRouter, routesOptions } from "../components/app.router/app.router";
import { Header } from "../components/header/header";
import { Menu, menuOptions } from "../components/menu/menu";

function App() {
  return (
    <div className="App">
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter
        menuOptions={menuOptions}
        routesOptions={routesOptions}
      ></AppRouter>
    </div>
  );
}

export default App;
