import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Route, Routes} from 'react-router-dom';
import Layout from "./component/Layout";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/"  element={<Layout />}>
        <Route index element={<div>hello</div>}/>
        <Route path="/chats" element={<div>hello</div>}/>
        <Route path="/*" element={<div>hello</div>}/>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
