import React from 'react'
import ReactDOM from 'react-dom'
import App from '../Components/App'
import store from '../store'
import { Provider } from 'react-redux'

it('renders without crashing', async () => {
    const div = document.createElement('div')
    ReactDOM.render((
        <Provider store={store}><App /></Provider>
    ), div)
})
