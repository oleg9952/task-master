export const calculatePercentage = (value: number, total: number): number => {
  // Handle the case where the total is zero to prevent division by zero errors.
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
};
