import Navbar from "./landing/components/Navbar";
import Footer from "./landing/components/Footer";
import { Outlet } from "react-router-dom";
const RentalLayout = () => {
  return (
    <>
      <Navbar />
      <main className="text-body text-text-sub antialiased">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RentalLayout;
