import { useRegister } from "../authHooks";
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import Checkbox from "../components/form/Checkbox";
import { useSpecialties } from "@/features/specialties/specialtiesHooks";
import { useState } from "react";

interface LoginProps {
  toggleFlip: () => void;
}

export default function Register({ toggleFlip }: LoginProps) {
  const {
    form,
    setForm,
    profile,
    handleChangeProfile,
    handleRegister,
    loading,
    error,
  } = useRegister();

  const { data: specialties, isLoading: isLoadingSpecialties } =
    useSpecialties();
  const [avatarMessage, setAvatarMessage] = useState<string | null>(null);
const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  return (
    <form
      onSubmit={handleRegister}
      className={`bg-teal-100/40 shadow-xl rounded-2xl p-6 w-full 
    ${form.isProfessional ? "max-w-6xl" : "max-w-md"} 
    mx-auto transition-all duration-300 ease-in-out`}
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Crea tu cuenta
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {form.isProfessional
            ? "Completa tu perfil profesional"
            : "Únete a nuestra comunidad"}
        </p>
      </div>
      <div
        className={`w-full gap-4 ${
          form.isProfessional ? "flex flex-col md:flex-row" : "flex flex-col"
        }`}
      >
        {/* Columna izquierda */}
        <div
          className={`flex flex-col gap-4 ${
            form.isProfessional ? "flex-1" : "w-full"
          }`}
        >
          <div className="flex flex-col items-center mb-4">
  <label className="relative cursor-pointer bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition-colors">
    Subir Avatar
    <input
      type="file"
      className="hidden"
      required
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          setForm({ ...form, avatar: file });
          setAvatarMessage("✅ Avatar cargado correctamente");
        }
      }}
    />
  </label>
  {avatarMessage && (
    <span className="mt-2 inline-block text-sm text-green-600 font-medium text-center max-w-[200px] truncate">
      {avatarMessage}
    </span>
  )}
</div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Nombre"
              value={form.name ?? ""}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Tu nombre"
            />
            <Input
              label="Apellido"
              value={form.lastName ?? ""}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              placeholder="Tu apellido"
            />
          </div>

          <Input
            label="Correo electrónico"
            type="email"
            value={form.email ?? ""}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="ejemplo@email.com"
          />

          <Input
            label="Contraseña"
            type="password"
            value={form.password ?? ""}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="••••••••"
          />
          <Input
            label="Teléfono"
            value={form.phone ?? ""}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+1234567890"
          />

          <Checkbox
            label="Soy Profesional"
            checked={form.isProfessional ?? ""}
            onChange={(checked) =>
              setForm({ ...form, isProfessional: checked })
            }
          />
        </div>

        {/* Columna derecha solo si es profesional */}
        {form.isProfessional && (
           <div key="professional-block"
    className={`flex-[1.5]  p-3 pt-2 rounded-xl  
        transition-all duration-300 ease-in-out
        w-full 
        ${
          form.isProfessional
            ? "opacity-100 max-h-[1000px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
  >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Especialidad
            </label>
            {isLoadingSpecialties ? (
              <p className="text-gray-500 text-sm">
                Cargando especialidades...
              </p>
            ) : (
              <select
                value={profile.specialtyId ?? ""}
                onChange={(e) =>
                  handleChangeProfile("specialtyId", Number(e.target.value))
                }
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Selecciona una especialidad</option>
                {specialties?.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            )}

            <TextArea
              label="Descripción profesional"
              value={profile.description ?? ""}
              onChange={(e) =>
                handleChangeProfile("description", e.target.value)
              }
              placeholder="Describe tus habilidades, experiencia y enfoque profesional..."
              rows={4}
            />

<div className="mt-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Certificado (PDF o imagen)
  </label>
  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div className="space-y-1 text-center">
      <label
        htmlFor="certificates"
        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
      >
        <span>Sube archivo</span>
        <input
          id="certificates"
          name="certificates"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="sr-only"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            handleChangeProfile("certificates", files);

            // ✅ Marca visual cuando se suben archivos
            if (files.length > 0) {
              setUploadMessage(`Se subieron ${files.length} archivo(s) correctamente ✅`);
            } else {
              setUploadMessage(null);
            }
          }}
        />
      </label>
      <p className="text-xs text-gray-500">
        PDF, JPG, PNG hasta 10MB
      </p>
    </div>
  </div>

  {/* Aviso de subida */}
  {uploadMessage && (
    <p className="mt-2 text-sm text-green-600 font-medium">
      {uploadMessage}
    </p>
  )}
</div>

          </div>
        )}
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          {loading ? "Procesando..." : "Registrarse"}
        </button>

        {error && (
          <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            type="button"
            onClick={toggleFlip}
            className="font-medium text-teal-600 hover:text-teal-500 transition-colors duration-200"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>
    </form>
  );
}
