import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "@/layouts/LandingLayout";
import Index from "@/pages/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
