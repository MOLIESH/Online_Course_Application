import Navbar from "../components/MasterComponents/Navbar";
import Footer from "../components/MasterComponents/Footer";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
