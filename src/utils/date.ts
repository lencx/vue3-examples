/**
 * @author: lencx
 * @create_at: Nov 23, 2020
 */

/**
 * getMonthDays
 * @param year
 * @param month
 */
export const getMonthDays = (year: number, month: number) => new Date(year, month, 0).getDate();

/**
 * getMonthFirst
 * @param year
 * @param month
 */
export const getMonthFirst = (year: number, month: number) => new Date(year, month - 1, 1).getDay();

/**
 * getDays
 * @param year
 * @param month
 */
export const getDays = (year: number, month: number) => {
  const a = getMonthFirst(year, month);
  const b = getMonthDays(year, month);
  return Array.from({length: a + b }, (_, i) => i >= a ? (i + 1 - a) : '');
}

export const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
}