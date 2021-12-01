import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
