/**
 * Utility functions for formatting data
 */

/**
 * Format time in seconds to MM:SS format
 */
export const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
};

/**
 * Format time for timer display (MM:SS:MS)
 */
export const formatTimerDisplay = (minutes: number, seconds: number, milliseconds: number): string => {
  const formatValue = (value: number): string => value < 10 ? `0${value}` : `${value}`;
  return `${formatValue(minutes)}:${formatValue(seconds)}:${formatValue(milliseconds)}`;
};

/**
 * Format exercise name with proper capitalization
 */
export const formatExerciseName = (name: string): string => {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Generate a unique ID
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};
