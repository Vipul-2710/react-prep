import React from 'react'
import { Provider } from 'react-redux'
import Users from '../contextApi/Users'
import { store } from './store'

function MainAppReduxApi() {
    // eska code app me likhana hai
  return (
    <div>
        <Provider store={store}>
            <Users/>
        </Provider>
        
    </div>
  )
}

export default MainAppReduxApi