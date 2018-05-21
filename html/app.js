import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => { render(require('./components/Root').default)})
}