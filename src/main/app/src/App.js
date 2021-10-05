import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoading from './components/PageLoading';

const VisitorContent = lazy(() => import('./components/VisitorContent'));
const UserContent = lazy(() => import('./components/UserContent'));

function App() {

  return (
    <BrowserRouter>
      <Layout className="app-layout">
        <div className="app-layout-wrap">
          <Navbar/>
          <Switch>
            <Suspense fallback={<PageLoading/>}>
              <Route path="/" exact component={VisitorContent}/>
              <Route path="/dashboard" component={UserContent}/>
            </Suspense>
          </Switch>
        </div>
        <Footer/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
