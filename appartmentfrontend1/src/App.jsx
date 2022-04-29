import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/loginReg/Login";
import { useSelector } from "react-redux";
import { Navbar } from "./pages/Navbar";
import { Flat } from "./pages/Flats";
import { FlatDetails } from "./pages/FlatDetails";
import { Register } from "./pages/loginReg/Register";
function App() {
  const user = useSelector((state) => state.AuthReducer.loginUser);
  console.log("user", user);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Flat /> : <Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="flat/:_id" element={<FlatDetails />} />
      </Routes>
    </div>
  );
}

export default App;
