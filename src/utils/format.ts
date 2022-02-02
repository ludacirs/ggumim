export const addCommaSecond = (priceNumber: number) =>
  priceNumber.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
