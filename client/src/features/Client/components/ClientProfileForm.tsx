import React, { useState } from "react";
import { useUpdateClientProfile } from "../clientHooks";
import type { ClientProfile } from "../types";
import "./ClientProfileForm.css";

interface Props {
  profile: ClientProfile;
  onFinish?: () => void;
}

const ClientProfileForm: React.FC<Props> = ({ profile, onFinish }) => {
  const [form, setForm] = useState({
    name: profile.name || "",
    lastName: profile.lastName || "",
    phone: profile.phone || "",
  });
  const [avatarFile, setAvatarFile] = useState<File | undefined>(undefined);

  const { mutate, isPending } = useUpdateClientProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNums = value.replace(/\D/g, ""); // Eliminar todo lo que no sea número
      setForm({ ...form, [name]: onlyNums });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAvatarFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { ...form, avatarFile },
      {
        onSuccess: () => {
          onFinish?.(); // cerrar modal
        },
      }
    );
  };

return (
  <form onSubmit={handleSubmit} className="client-form-container">

    {avatarFile && (
      <img
        src={URL.createObjectURL(avatarFile)}
        alt="Preview"
        className="w-24 h-24 rounded-full object-cover mx-auto mt-2"
      />
    )}

    <div className="mb-4">
      <label htmlFor="avatar" className="block text-sm font-medium mb-1">
        Avatar
      </label>
      <input
        id="avatar"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="client-form-file"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium mb-1">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        className="client-form-input"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
        Apellido
      </label>
      <input
        id="lastName"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Apellido"
        className="client-form-input"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="phone" className="block text-sm font-medium mb-1">
        Teléfono
      </label>
      <input
        id="phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Teléfono"
        className="client-form-input"
      />
    </div>

    <button
      type="submit"
      disabled={isPending}
      className="client-form-button bg-teal-300 dark:bg-teal-400"
    >
      {isPending ? "Guardando..." : "Guardar"}
    </button>
  </form>
);


};

export default ClientProfileForm;
