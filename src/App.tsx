import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "@/layouts/LandingLayout";
import RentalLayout from "@/layouts/RentalLayout";
import Index from "@/pages/Index";
import RentalView from "./pages/RentalView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="/rentals" element={<RentalLayout />}>
          <Route path=":slug" element={<RentalView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
