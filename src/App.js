import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './component/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const PageRoutes = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <PageRoutes />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
