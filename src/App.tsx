import React from 'react'
import MyComponent from './myComponent'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  )
}

export default App
