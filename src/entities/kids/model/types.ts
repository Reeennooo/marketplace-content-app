export interface Kid {
  id: number;
  name: string;
  age: number;           // возраст в годах (может быть 0 для младенцев)
  birthDate?: string;    // опционально
}

export interface KidsState {
  kids: Kid[];
  loading: boolean;
  error: string | null;
  currentKid: Kid | null;
}