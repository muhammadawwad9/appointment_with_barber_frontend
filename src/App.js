import logo from "./logo.svg";
import "./App.css";
import Inputs from "./components/Public/Inputs";
import Title from "./components/Public/Title";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";

function App() {
  const menuClick = () => {
    console.log("clicked!");
  };
  return (
    <div className="App">
      <h1>App component</h1>
      {/* <Menu />
      <Navbar username="Nuwrss" menuClick={menuClick} />
      <Title title="LOG IN" />
      <Inputs icon="img/profile-user.svg" type="email" placeholder="email" /> */}
    </div>
  );
}

export default App;
