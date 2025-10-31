import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/landing/components/Navbar";
import Footer from "@/layouts/landing/components/Footer";
const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <main className="text-base text-sub antialiased">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingLayout;
