import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Profile from "./page/Profile";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>hello</div>} />
            <Route path="/profile" element={<Profile />}/>
            <Route path="/*" element={<div>hello</div>} />
          </Route>
        </Routes>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
