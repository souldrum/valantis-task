export const rubSign = "₽";

export const formatPrice = (price: number) => {
  const CurrencyFormatter = Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return CurrencyFormatter.format(price);
};
