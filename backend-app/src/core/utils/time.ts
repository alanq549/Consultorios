import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

// Cambia la zona horaria a la tuya (Ciudad de México)
const DEFAULT_TZ = "America/Mexico_City";

export function parseAppointmentDate(dateStr: string, timeStr: string) {
  const combined = `${dateStr} ${timeStr}`;
  return dayjs.tz(combined, "YYYY-MM-DD HH:mm", DEFAULT_TZ).toDate();
}
