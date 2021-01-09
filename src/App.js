import React from 'react';
import './scss/App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Reports from './pages/Reports';
import Products from './pages/Products';
import Footer from './components/Footer';
import ProductScreen from './pages/ProductScreen';
import BlankPage from './pages/BlankPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/reports' component={Reports} /> */}
        <Route path='/latest' component={Products} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart' component={ProductScreen} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route component={BlankPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
