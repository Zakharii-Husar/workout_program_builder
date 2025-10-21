/**
 * Common helper functions
 */

/**
 * Safe JSON parse with fallback
 */
export const safeJsonParse = (jsonString: string, fallback: any): any => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return fallback;
  }
};

/**
 * Safe JSON stringify
 */
export const safeJsonStringify = (obj: any, fallback: string = '{}'): string => {
  try {
    return JSON.stringify(obj);
  } catch {
    return fallback;
  }
};
