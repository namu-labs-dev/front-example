export const toFixedWithMaxDecimal = (
  amount: number,
  decimal: number,
  maxDecimal: number,
) => {
  const _decimal = Math.min(decimal, maxDecimal);

  const minAmount = Math.pow(10, -_decimal);

  if (amount != 0 && amount < minAmount) return minAmount.toFixed(_decimal);

  return amount.toFixed(_decimal);
};

export const prettyNumber = (amount: number, maxDecimal?: number) => {
  const _maxDecimal = maxDecimal ?? 6;
  let result;
  const absAmount = Math.abs(amount);
  if (absAmount >= 10000)
    result = toFixedWithMaxDecimal(amount, 0, _maxDecimal);
  else if (absAmount >= 1000)
    result = toFixedWithMaxDecimal(amount, 1, _maxDecimal);
  else if (absAmount >= 100)
    result = toFixedWithMaxDecimal(amount, 2, _maxDecimal);
  else if (absAmount >= 10)
    result = toFixedWithMaxDecimal(amount, 3, _maxDecimal);
  else if (absAmount >= 1)
    result = toFixedWithMaxDecimal(amount, 4, _maxDecimal);
  else if (absAmount > 0)
    result = toFixedWithMaxDecimal(amount, 5, _maxDecimal);
  else if (absAmount === 0) result = "0";

  return result ? Number(result) : "-";
};

export const prettyNumberLocaleString = (
  amount: number | string,
  maxDecimal?: number,
) => {
  const strValue = `${prettyNumber(Number(amount), maxDecimal)}`;

  if (strValue === "-") return strValue;

  const [integer, decimal] = strValue.split(".");

  if (integer === undefined) return "0";

  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
};

export const prettyNumberWithSymbol = (
  amount: number | string,
  maxDecimal?: number,
) => {
  if (Number(amount) >= 1000 && Number(amount) < 1000000)
    return prettyNumberLocaleString(Number(amount) / 1000, maxDecimal) + "K";
  if (Number(amount) >= 1000000 && Number(amount) < 1000000000)
    return prettyNumberLocaleString(Number(amount) / 1000000, maxDecimal) + "M";
  if (Number(amount) >= 1000000000)
    return (
      prettyNumberLocaleString(Number(amount) / 1000000000, maxDecimal) + "B"
    );

  return prettyNumberLocaleString(Number(amount), maxDecimal);
};
