import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#f8faf8]">

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <Topbar />

        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;