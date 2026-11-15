import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Bottomlayout from "./BottomLayout";

function MainLayout() {
  return (
    <div className="min-h-screen">

      {/* Common Header */}
      <Header />

      <div className="flex">
        {/* Common Sidebar */}
        <Sidebar />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-5">
          <Outlet />
        </main>
      </div>

      {/* Common Bottom Navigation */}
      <Bottomlayout />

    </div>
  );
}

export default MainLayout;