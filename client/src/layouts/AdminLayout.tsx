import { Outlet } from "react-router-dom";
import Sidebar from "@/features/Admin/components/SidebarProfessional";
import Topbar from "@/features/Admin/components/TopbarProfessional";
import { useAppSelector } from "@/hooks/redux";
import { LayoutType } from "@/types/layout";
import { useSyncTheme } from "@/hooks/useSyncTheme"; // ⬅️ este es el nuevo
import "@/styles/layouts/professionalLayout.css";

export default function AdminLayout() {
  useSyncTheme();

  const layout: LayoutType = useAppSelector(
    (state) => state.customConfig.data?.layout as LayoutType || LayoutType.SIDEBAR
  );

  return (
    <div className="layout-container">
      <div className={`topbar-layout ${layout === LayoutType.TOPBAR ? 'visible' : 'hidden'}`}>
        <Topbar />
        <div className="topbar-wrapper">
          <main className="topbar-main">
            <Outlet />
          </main>
        </div>
      </div>

      <div className={`sidebar-layout ${layout === LayoutType.SIDEBAR ? 'visible' : 'hidden'}`}>
        <Sidebar />
        <main className="sidebar-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

