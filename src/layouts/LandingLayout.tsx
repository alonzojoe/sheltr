import { Outlet } from "react-router-dom";
import Navbar from "@/layouts/landing/components/Navbar";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <main className="text-body text-sub antialiased">
        <Outlet />
      </main>
    </>
  );
};

export default LandingLayout;
