import { useProfessionalsBySpecialty } from "@/features/professionals/professionalHooks";
import ProfessionalCard from "@/features/professionals/components/ProfessionalCard";

type Props = {
  specialtyId: number;
  onSelectProfessional: (userId: number) => void;
  onBack: () => void; // <-- función para regresar al paso anterior
};

export default function StepSelectProfessional({
  specialtyId,
  onSelectProfessional,
  onBack,
}: Props) {
  const {
    data: professionals,
    isLoading,
    error,
  } = useProfessionalsBySpecialty(specialtyId);

  if (isLoading)
    return (
      <p className="text-gray-500 text-center">Cargando profesionales...</p>
    );
  if (error)
    return (
      <p className="text-red-500 text-center">Error cargando profesionales</p>
    );

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        ← Volver
      </button>

      <h2 className="text-2xl font-semibold text-center">
        Selecciona un profesional
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {professionals?.map((pro) => (
          <ProfessionalCard
            key={pro.id}
            professional={pro}
            onSelect={onSelectProfessional}
            showSelectButton={true}
          />
        ))}
      </div>
    </div>
  );
}
