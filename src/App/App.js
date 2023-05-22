import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
