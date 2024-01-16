import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import {Provider} from 'react-redux'
import store from './store';
import { HelmetProvider } from 'react-helmet-async';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route index={true} path='/' element={<HomeScreen></HomeScreen>}/>
      <Route path=':id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
  </HelmetProvider>
);

reportWebVitals();
