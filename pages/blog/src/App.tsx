import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogHeader from './components/blog-header';
import BlogFooter from './components/blog-footer';
import routes from './routes';

import 'antd/lib/style';
import './style/app.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BlogHeader />
      <div className="app-content">
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={lazy(component)} />
            ))}
          </Switch>
        </Suspense>
      </div>
      <BlogFooter />
    </BrowserRouter>
  );
};

export default App;
