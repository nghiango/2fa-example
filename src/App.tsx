import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "@common/Header";
import { Footer } from "@common/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="app__main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
