import "./config/ReactotronConfig";
import "./styles/global.scss";

import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from './routes';

import store from './store'
import history from './services/history'

// Components
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
