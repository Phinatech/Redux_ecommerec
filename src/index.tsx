import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from 'react-redux';
import { store } from './Components/Global/Store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist';

const queryClient = new QueryClient();
let persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <BrowserRouter> 
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <QueryClientProvider client = {queryClient} >
        <App />
        <ReactQueryDevtools/>
    </QueryClientProvider>
    {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
