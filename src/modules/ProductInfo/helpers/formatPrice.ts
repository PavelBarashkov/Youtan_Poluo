export const formatPrice = (price: number): string => {
  if (!price) {
    return "";
  }
  return new Intl.NumberFormat("ru-Ru").format(price);
};
