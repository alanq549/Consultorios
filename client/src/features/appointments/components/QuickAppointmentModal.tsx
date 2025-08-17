import { useState } from "react";
import type { Professional as BaseProfessional } from "@/features/professionals/components/ProfessionalCard";
import StepSelectSchedule from "../steps/StepSelectSchedule";
import StepConfirmAppointment from "../steps/StepConfirmAppointment";
import { useCreateAppointment } from "../appointmentsHooks";
import { useAppSelector } from "@/hooks/redux";
import StepSelectService, { type Service } from "../steps/StepSelectService";
import type { Schedule } from "../steps/StepSelectSchedule";

type Props = {
  professional: ProfessionalWithSchedule;
  onClose: () => void;
};

export type ProfessionalWithSchedule = BaseProfessional & {
  services?: Service[];
  schedules?: Schedule[];
};

const staticUrl = import.meta.env.VITE_STATIC_URL;

export default function QuickAppointmentModal({ professional, onClose }: Props) {
  const user = useAppSelector((state) => state.auth.user);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { mutate: createAppointment } = useCreateAppointment();

  const handleConfirm = () => {
    if (!selectedServiceId || !selectedDate || !selectedTime) return;
    createAppointment(
      {
        serviceId: selectedServiceId,
        professionalId: professional.user.id,
        date: selectedDate,
        startTime: selectedTime,
        notes: "",
      },
      {
        onSuccess: () => setIsConfirmed(true),
        onError: (err: Error) => alert("Error al crear la cita: " + err.message),
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh] relative">
        {/* Encabezado mejorado */}
        <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-zinc-700">
          <div className="relative group">
            <img
              src={`${staticUrl}${professional.user.avatar}` || "/default-avatar.png"}
              alt={`${professional.user.name} ${professional.user.lastName}`}
              className="w-20 h-20 rounded-full object-cover border-4 border-teal-500 shadow-md hover:shadow-lg transition-all duration-200"
            />
            {professional.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white rounded-full p-1 border-2 border-white dark:border-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {professional.user.name} {professional.user.lastName}
                </h3>
                <p className="text-teal-500 font-medium">{professional.specialty?.name ?? "Especialidad"}</p>
              </div>
              
              <button
                onClick={onClose}
                className="ml-4 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
                aria-label="Cerrar modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {professional.reviewsReceived && professional.reviewsReceived.length > 0 && (
              <div className="mt-2 flex items-center">
                <div className="flex items-center text-yellow-400 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-700 dark:text-gray-300 font-medium">
                    {professional.reviewsReceived.reduce((acc, review) => acc + review.rating, 0) / professional.reviewsReceived.length}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  ({professional.reviewsReceived.length} reseñas)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Contenido del modal */}
        <div className="py-4">
          {!selectedServiceId && (
            <StepSelectService
              services={professional.services || []}
              onSelectService={setSelectedServiceId}
            />
          )}

          {selectedServiceId && (!selectedDate || !selectedTime) && (
            <StepSelectSchedule
              schedules={professional.schedules || []}
              onSelectSchedule={(date, time) => {
                setSelectedDate(date);
                setSelectedTime(time);
              }}
            />
          )}

          {selectedServiceId && selectedDate && selectedTime && !isConfirmed && (
            <StepConfirmAppointment
              clientName={user ? `${user.name} ${user.lastName ?? ""}` : "Cliente"}
              specialtyName={professional.specialty?.name ?? ""}
              professionalName={`${professional.user.name} ${professional.user.lastName}`}
              selectedSchedule={`${selectedDate} ${selectedTime}`}
              onConfirm={handleConfirm}
            />
          )}

          {isConfirmed && (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ¡Cita confirmada!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Te hemos enviado los detalles a tu correo electrónico.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition flex items-center justify-center mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}