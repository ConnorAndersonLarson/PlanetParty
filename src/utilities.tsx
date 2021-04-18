export const formatLargeNumbers = (number: number): string => {
  let totalFormatted = number.toString().split('.');
  totalFormatted[0] = totalFormatted[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (totalFormatted.join('.'));
}
