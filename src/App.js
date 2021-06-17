// import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SideMenu from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Stack from "./Pages/Stack";
import Contact from "./Pages/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="relative min-h-screen md:flex">
        <Router>
          <SideMenu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/stack" component={Stack} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
