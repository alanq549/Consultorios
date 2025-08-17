import { Outlet } from "react-router-dom";
import Sidebar from "@/features/Client/components/SidebarClient";
import Topbar from "@/features/Client/components/TopbarClient";
import { useAppSelector } from "@/hooks/redux";
import { LayoutType } from "@/types/layout";
import { useSyncTheme } from "@/hooks/useSyncTheme"; // ⬅️ este es el nuevo
import "@/styles/layouts/ClientLayout.css";

export default function ClientLayout() {
  useSyncTheme(); // 👈 aplica el tema desde Redux cuando el layout se monta

  const layout: LayoutType = useAppSelector(
    (state) => state.customConfig.data?.layout as LayoutType || LayoutType.SIDEBAR
  );

  return (
    <div className="client_layout-container">
      {layout === LayoutType.TOPBAR ? (
        <div className="client_topbar-layout">
          <Topbar />
          <div className="client_topbar-wrapper">
            <main className="client_topbar-main">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <div className="client_sidebar-layout">
          <Sidebar />
          <main className="client_sidebar-main">
            <Outlet />
          </main>
        </div>
      )}
    </div>
  );
}
