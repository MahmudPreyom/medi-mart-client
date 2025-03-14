import { ReactNode } from "react";

export interface MedicineData {
  [x: string]: ReactNode;
  name: string;
  image: string;
  type: string;
  company: string;
  price: number;
  symptoms: string;
  description: string;
  manufacturerDetails: string;
  quantity: number;
  inStock: boolean;
  prescriptionRequired: boolean;
  expiryDate: string;
}
