import "./App.css";
import Hero from "./component/Hero/Hero";
import Main from "./component/Main/Main";
import Tab from "./component/Main/Tab";
import Navbar from "./component/Navbar/Navbar";
import Post from "./component/Post/Post";
import Login from "./component/SignIn/Login";
import Signup from "./component/SignIn/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tab />
      {/* <Main /> */}
      {/* <Post /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
