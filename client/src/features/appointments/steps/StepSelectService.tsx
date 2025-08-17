// src/features/appointments/steps/StepSelectService.tsx
export type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
};

type Props = {
  services: Service[];
  onSelectService: (serviceId: number) => void;
};


export default function StepSelectService({
  services,
  onSelectService,
  
}: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Selecciona un servicio
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Elige el servicio que deseas agendar
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.id}>
            <button
              onClick={() => onSelectService(service.id)}
              className="w-full h-full text-left group"
            >
              <div className="h-full p-6 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-teal-500 dark:hover:border-zinc-400 bg-white dark:bg-zinc-800 group-active:scale-[0.98]">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        {service.durationMinutes} min
                      </span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
