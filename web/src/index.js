import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"
import App from "./components/App.js"
import "./config/axios.config.js"
import rootReducer from './reducers/';  

const store = createStore(rootReducer)

const domNode = document.getElementById("root")
const root = createRoot(domNode)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)