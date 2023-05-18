import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/configStore'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail'
export const history = createBrowserHistory({window})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
