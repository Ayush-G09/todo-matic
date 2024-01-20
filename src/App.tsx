import React from "react";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import LoadingIndicator from "./component/LoadingIndicator";

function App() {
  let persistor = persistStore(store);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<LoadingIndicator/>} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
