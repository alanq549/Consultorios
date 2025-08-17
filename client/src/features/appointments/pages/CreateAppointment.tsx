import { useState } from "react";
import QuickAppointmentModal, { type ProfessionalWithSchedule } from "@/features/appointments/components/QuickAppointmentModal";
import { useProfessionalsBySpecialty } from "@/features/professionals/professionalHooks";
import { useSpecialties } from "@/features/specialties/specialtiesHooks";
import StepSelectProfessional from "../steps/StepSelectProfessional";

export default function CreateAppointment() {
  const { data: specialties } = useSpecialties();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<number | null>(null);
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { data: professionals } = useProfessionalsBySpecialty(selectedSpecialtyId ?? 0);
  const selectedProfessional = professionals?.find(p => p.user.id === selectedProfessionalId) as ProfessionalWithSchedule;

if (!selectedSpecialtyId) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
        Selecciona una especialidad
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {specialties?.map((spec) => (
          <button
            key={spec.id}
            onClick={() => setSelectedSpecialtyId(spec.id)}
            className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg dark:shadow-neutral-600 transition cursor-pointer text-center"
          >
            <div className="text-lg font-medium text-gray-800 dark:text-white">{spec.name}</div>
            <p>{spec.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

  if (!selectedProfessionalId) {
    return (
      <StepSelectProfessional
        specialtyId={selectedSpecialtyId}
        onSelectProfessional={id => {
          setSelectedProfessionalId(id);
          setShowModal(true); // Abrimos el modal al seleccionar
        }}
        onBack={() => setSelectedSpecialtyId(null)}
      />
    );
  }

  return (
    <>
      {showModal && selectedProfessional && (
        <QuickAppointmentModal
          professional={selectedProfessional}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
