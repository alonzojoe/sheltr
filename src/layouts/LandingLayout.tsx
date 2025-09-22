import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <header>Nav</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LandingLayout;
