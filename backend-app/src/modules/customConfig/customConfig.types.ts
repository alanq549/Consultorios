import { LayoutType } from "../../core/lib/prisma/generated";

export interface UpdateConfigDTO {
  language?: string;
  theme?: string;
  layout?: LayoutType;
  preferences?: Record<string, any>;
  notificationsEnabled?: boolean;
}
