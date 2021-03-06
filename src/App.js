import "./config/ReactotronConfig";
import "./styles/global.scss";
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

import store from "./store";
import history from "./services/history";

// Components
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Layout>
            <ToastContainer />
            <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
