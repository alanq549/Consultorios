import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "@/components/UserMenu";
import ConfigModal from "@/components/ConfigModal";
import "@/styles/features/client/components/topbarClient.css";
import NotificationsDropdown from "@/features/notifications/components/NotificationsDropdown";

export default function TopbarClient() {
  const [openConfigModal, setOpenConfigModal] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="client_topbar-header">
        {/* Izquierda: título fijo */}
        <h1 className="client_topbar-title">Consultorio</h1>

        {/* Centro: nav links */}
        <nav className="client_topbar-nav">
          <Link
            to="/client/dashboard"
            className={`client_topbar-link ${
              location.pathname === "/client/dashboard" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/client/schedule"
            className={`client_topbar-link ${
              location.pathname === "/client/schedule" ? "active" : ""
            }`}
          >
            Citas
          </Link>
          <Link
            to="/client/appointments"
            className={`client_topbar-link ${
              location.pathname === "/client/appointments" ? "active" : ""
            }`}
          >
            Mi Citas
          </Link>
          <Link
            to="/client/Myperfil"
            className={`client_topbar-link ${
              location.pathname === "/client/Myperfil" ? "active" : ""
            }`}
          >
            Perfil
          </Link>
        </nav>

        {/* Derecha: campana + menú usuario */}
        <div className="client_topbar-right relative" >
            <NotificationsDropdown />
          <UserMenu onOpenConfig={() => setOpenConfigModal(true)} />
        </div>
      </header>

      <ConfigModal
        isOpen={openConfigModal}
        onClose={() => setOpenConfigModal(false)}
      />
    </>
  );
}
