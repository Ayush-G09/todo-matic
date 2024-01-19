import React from 'react';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </Provider>
  );
}

export default App;
