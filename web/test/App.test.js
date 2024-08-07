import {cleanup, fireEvent, render} from '@testing-library/react'
import App from '../src/components/App'
import rootReducer from '../src/reducers/'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"

afterEach(cleanup)

it('Muestra el campo para buscar archivo y hace click en el botón buscar', () => {
  const store = createStore(rootReducer)
    const {queryByLabelText, getByLabelText} = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    expect(queryByLabelText(/Buscar archivo/i)).toBeTruthy()

    fireEvent.click(getByLabelText(/Buscar/i))
})