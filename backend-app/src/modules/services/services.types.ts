export interface CreateServiceDTO {
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
}

export interface UpdateServiceDTO {
  name?: string;
  description?: string;
  durationMinutes?: number;
  price?: number;
  isActive?: boolean;
}
