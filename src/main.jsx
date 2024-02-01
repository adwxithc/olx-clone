import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ BrowserRouter} from 'react-router-dom'
import Context,{FirebaseContext} from './Context/Context.jsx'
import {db} from './FireBase/cofig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{db}}>
      <BrowserRouter>
      <Context>
      <App />
      </Context>
      </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
