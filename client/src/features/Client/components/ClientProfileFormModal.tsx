import React from "react";
import type { ClientProfile } from "../types";
import ClientProfileForm from "./ClientProfileForm";

interface Props {
  profile: ClientProfile;
  isOpen: boolean;
  onClose: () => void;
}

const ClientProfileFormModal: React.FC<Props> = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg w-full max-w-md relative ">
        <h2 className="text-xl font-semibold mb-4">Editar Perfil</h2>
        <ClientProfileForm profile={profile} onFinish={onClose} />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ClientProfileFormModal;
