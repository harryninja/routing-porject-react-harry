import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Nav from "./nav";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
