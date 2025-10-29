import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeProfile from "./pages/EmployeeProfile";
import Flows from "./pages/Flows";
import FlowBuilder from "./pages/FlowBuilder";
import Assignments from "./pages/Assignments";
import Analytics from "./pages/Analytics";
import EmployeePortal from "./pages/EmployeePortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/employees" element={<Employees />} />
          <Route path="/dashboard/employees/:id" element={<EmployeeProfile />} />
          <Route path="/dashboard/flows" element={<Flows />} />
          <Route path="/dashboard/flows/:id/edit" element={<FlowBuilder />} />
          <Route path="/dashboard/assignments" element={<Assignments />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/me" element={<EmployeePortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
