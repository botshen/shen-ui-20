import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './lib/layout/header'
import Aside from './lib/layout/aside'

import Layout from './lib/layout/layout'
import Content from './lib/layout/content'
import Footer from './lib/layout/footer'

export const App: React.FC = () => {
  return (
        <div>
            <Layout className="site-page">
                <Header className="site-header">
                    <div className="logo">
                        <span> shenUI </span>
                    </div>
                </Header>
                <Layout>
                    <Aside className="site-aside">
                        <h2>组件</h2>
                        <ul>
                            <li>
                                <NavLink to="/icon">Icon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/button">Button</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dialog">对话框</NavLink>
                            </li>
                            <li>
                                <NavLink to="/layout">布局</NavLink>
                            </li>
                            <li>
                                <NavLink to="/form">表单</NavLink>
                            </li>
                        </ul>
                    </Aside>
                    <Content className="site-main">
                        <Outlet/>
                    </Content>
                </Layout>
                <Footer className="site-footer">
                    &copy; 沈鑫
                </Footer>
            </Layout>
        </div>
  )
}
