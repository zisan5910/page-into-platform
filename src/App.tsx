
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryDetails from "./pages/CategoryDetails";
import MyApps from "./pages/MyApps";
import Notifications from "./pages/Notifications";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import TodaysMarket from "./pages/categories/TodaysMarket";
import BusSchedule from "./pages/categories/BusSchedule";
import TrainSchedule from "./pages/categories/TrainSchedule";
import HouseRent from "./pages/categories/HouseRent";
import Hotel from "./pages/categories/Hotel";
import Student from "./pages/categories/Student";
import TouristSpots from "./pages/categories/TouristSpots";
import ReligiousPlaces from "./pages/categories/ReligiousPlaces";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="/my-apps" element={<MyApps />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/category/market" element={<TodaysMarket />} />
          <Route path="/category/bus-schedule" element={<BusSchedule />} />
          <Route path="/category/train-schedule" element={<TrainSchedule />} />
          <Route path="/category/house-rent" element={<HouseRent />} />
          <Route path="/category/hotel" element={<Hotel />} />
          <Route path="/category/student" element={<Student />} />
          <Route path="/category/tourist-spot" element={<TouristSpots />} />
          <Route path="/category/religious" element={<ReligiousPlaces />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
