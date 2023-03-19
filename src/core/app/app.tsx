import { AppRouter } from "../components/app.router/app.router";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Menu, menuOptions } from "../components/menu/menu";

function App() {
  return (
    <div className="App">
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
