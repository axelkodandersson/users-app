import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60, // datan räknas som färsk i 1 timme
            gcTime: 1000 * 60 * 60, // cachen sparas i 1 timme
            refetchOnWindowFocus: false, // hämta inte om när man byter flik
            retry: 1, // försök bara en gång till vid fel
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
);
