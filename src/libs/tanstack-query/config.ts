import { QueryClientConfig } from "@tanstack/react-query";

export const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: Infinity,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
    },
  },
};
