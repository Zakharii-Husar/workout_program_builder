export type WeightUnit = 'kg' | 'lb';

const GRAMS_IN_KG = 1000;
const KG_IN_LB = 0.45359237; // exact definition

export const weightConversionService = {
  // Base conversions between kg and grams
  kgToGrams(kg: number): number {
    return Math.round(kg * GRAMS_IN_KG);
  },

  gramsToKg(grams: number): number {
    return grams / GRAMS_IN_KG;
  },

  // Between kg and lb
  kgToLb(kg: number): number {
    return kg / KG_IN_LB;
  },

  lbToKg(lb: number): number {
    return lb * KG_IN_LB;
  },

  // Helpers for UI <-> storage
  gramsToDisplay(grams: number, unit: WeightUnit): number {
    const kg = this.gramsToKg(grams);
    return unit === 'kg' ? kg : this.kgToLb(kg);
  },

  displayToGrams(value: number, unit: WeightUnit): number {
    const kg = unit === 'kg' ? value : this.lbToKg(value);
    return this.kgToGrams(kg);
  },
};


