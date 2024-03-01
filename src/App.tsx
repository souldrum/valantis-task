import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Layout } from "./layout/Layout";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
};
