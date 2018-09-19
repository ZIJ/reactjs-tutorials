import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout } from 'antd';
import './App.css';
import Categories from './components/Categories';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

import { Provider } from 'react-redux';
import store from './store';
import ShoppingCartBadge from './components/ShoppingCartBadge';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: 'white', display: 'flex' }}>
              <Categories />
              <ShoppingCartBadge />
            </Header>
            <Content style={{ display: 'flex', flex: 1, paddingTop: 24, paddingRight: 24, paddingLeft: 24 }}>
              <div style={{ display: 'flex', flex: 1, padding: 24, background: 'white' }}>
                <Route exact path="/" component={HomePage} />
                <Route path="/categories/:id/products" component={ProductsPage} />
                <Route path="/products/:id" component={ProductDetailsPage} />
              </div>
            </Content>
            <Footer>
              <div style={{ textAlign: 'center' }}>
                CPCIT © 2018
            </div>
            </Footer>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
