import React from 'react';

import 'antd/dist/antd.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Icon from "./components/Icon";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import CartIcon from "./components/CartIcon";

import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";





function App() {


  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  return (
    <div className="App ">
      <Router>

        <Layout>
          <Header className="header">
            <div className="logo"  >
              <Link to="/"> open cart
                <Icon />
              </Link>
            </div>


            <Menu style={{ position: 'relative' }} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="2">new products</Menu.Item>
              <Menu.Item key="3">products sale</Menu.Item>
              <Menu.Item key="4">products this week</Menu.Item>
              <Menu.Item style={{ position: 'absolute', right: '0' }} key="5">   <CartIcon /></Menu.Item>

            </Menu>




          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="fashion">
                  <Menu.Item key="1">man</Menu.Item>
                  <Menu.Item key="2">women</Menu.Item>
                  <SubMenu key="sub2" title="women">

                    <SubMenu key="sub3" title="clothes">
                      <Menu.Item key="4">
                        <Link className="nav-link" to="/women/clothes/tshirt"> tshirt</Link>

                      </Menu.Item>
                      <Menu.Item key="5">office</Menu.Item>
                      <Menu.Item key="6">garden</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7">make up</Menu.Item>
                    <Menu.Item key="8">shoes</Menu.Item>
                    <Menu.Item key="9">accessories</Menu.Item>


                  </SubMenu>

                </SubMenu>





              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>

              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0




                }}
              >


                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact />

                <Route path="/women/clothes/tshirt" component={Products} exact />

                <Route path="/products/:id" component={Product} />


              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>

    </div>
  );
}
function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;