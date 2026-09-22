import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import Header from './pages/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Footer from './pages/footer/footer';
import Contact from './pages/contact/contact';
import Product from './pages/product/product';
import Solutions from './pages/solutions/solutions';
import Quality from './pages/quality/quality';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Header></Header>
      <Switch>
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/product" exact component={Product}></Route>
        <Route path="/solutions" exact component={Solutions}></Route>
        <Route path="/quality" exact component={Quality}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
