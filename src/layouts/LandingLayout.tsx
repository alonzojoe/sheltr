import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <header>Nav</header>
      <main className="text-sm text-sub antialiased">
        <Outlet />
      </main>
    </>
  );
};

export default LandingLayout;
