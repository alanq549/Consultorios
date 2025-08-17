// src/features/notifications/components/NotificationsDropdown.tsx
import { useState, useRef, useEffect } from "react";
import { useNotifications } from "../notificationsHooks";
import { useAppSelector } from "@/hooks/redux"; // para leer el layout del store

export default function NotificationsDropdown() {
  const [open, setOpen] = useState(false);
  const { notifications, isLoading, markAsRead } = useNotifications();
  const ref = useRef<HTMLDivElement>(null);

  // 🔹 Leer layout actual
  const layout = useAppSelector(
    (state) => state.auth.user?.config?.layout || "SIDEBAR"
  );

  // Cerrar dropdown al hacer click afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Notificaciones"
        className="client_notification-button relative"
        onClick={() => setOpen((o) => !o)}
      >
        {/* ícono campana */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="client_bell-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>
      {open && (
        <div
          className={
            layout === "SIDEBAR"
              ? "absolute left-0 bottom-full mt-0 mb-2 w-80 max-h-96 overflow-auto bg-white dark:bg-zinc-800 border rounded shadow-lg z-{51}"
              : "absolute right-0 mt-2 w-80 max-h-96 overflow-auto bg-white dark:bg-zinc-800 border rounded shadow-lg z-{51}"
          }
        >
          <h3 className="p-2 border-b font-semibold">Notificaciones</h3>
          {isLoading && <p className="p-2 text-center">Cargando...</p>}
          {!isLoading && notifications.length === 0 && (
            <p className="p-2 text-center text-gray-500">
              No tienes notificaciones.
            </p>
          )}
          <ul>
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-2 cursor-pointer border-b hover:bg-teal-50 dark:bg-zinc-800   ${
                  notif.isRead
                    ? "text-gray-600"
                    : "font-bold bg-gray-50 dark:text-gray-100"
                }`}
                onClick={() => {
                  if (!notif.isRead) markAsRead(notif.id);
                  // Acción según notificación
                }}
              >
                <p>{notif.title}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {notif.message}
                </p>
                <small className="text-xs text-gray-500 dark:text-gray-200">
                  {new Date(notif.createdAt).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
