import logo from "./logo.svg";
import "./App.css";
import Inputs from "./components/Public/Inputs";
import Title from "./components/Public/Title";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
//components
import Buttons from "./components/Public/Buttons";
import Card from "./components/Public/Card";
import Login from "./components/Login/Login";

function App() {
  const menuClick = () => {
    console.log("clicked!");
  };
  return (
    <div className="App">
      <h1>App component</h1>
      <Login />
      {/* <Menu />
      <Navbar username="Nuwrss" menuClick={menuClick} />
      <Title title="LOG IN" />
      <Inputs icon="img/profile-user.svg" type="email" placeholder="email" /> */}
      {/* <h1>App component</h1>
      <Buttons text="Login" />
      <Card businessName="cut pro" location="waze://tamra" avg="4.3" />
     <Card businessName="perfect cut" location="waze://Kafr-Qara" avg="4.14" />*/}
    </div>
  );
}

export default App;
