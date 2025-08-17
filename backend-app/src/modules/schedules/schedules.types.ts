export interface AvailableSchedule {
  id: number;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  professionalId: number;
  isAvailable: boolean;
}
