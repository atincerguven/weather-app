import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "./app.styled";
import Home from "./pages/Home";
import ForecastPage from "./pages/ForecastPage";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/forecast" component={ForecastPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
