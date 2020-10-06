import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/navbar/Layout';
import Spinner from './components/spinner/Spinner';

import { slowImport } from './utils/SlowImport';
import GlobalStyle from './styles/GlobalStyle';

const Home = React.lazy(() => slowImport(import('./pages/Home'), 100));
const Todo = React.lazy(() => slowImport(import('./pages/Todo'), 100));
const AddTodo = React.lazy(() => slowImport(import('./pages/Addtodo'), 100));
const About = React.lazy(() => slowImport(import('./pages/About.js'), 100));

const Edit = React.lazy(() => slowImport(import('./pages/Edit.js'), 100));

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Suspense
            fallback={
              <Layout>
                <Spinner />
              </Layout>
            }
          >
            <GlobalStyle />
            <Layout>
              <Route exact path="/" component={Home} />
              <Route path="/todos" component={Todo} />
              <Route path="/addtodo" component={AddTodo} />
              <Route path="/about" component={About} />
              <Route path="/edit" component={Edit} />
            </Layout>
          </Suspense>
        </Switch>
      </Router>
    </>
  );
};

export default App;
