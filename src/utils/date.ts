/**
 * @author: lencx
 * @create_at: Nov 23, 2020
 */

/**
 * getMonthDays
 * @param year
 * @param month
 */
export const getMonthDays = (year: number, month: number) => {
  const start = new Date(year, month - 1, 1).getTime();
  const end = new Date(year, month, 1).getTime();
  return (end - start) / (1000 * 60 * 60 * 24);
}

/**
 * getMonthFirst
 * @param year
 * @param month
 */
export const getMonthFirst = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay();
}

/**
 * getDays
 * @param year
 * @param month
 */
export const getDays = (year: number, month: number) => {
  const a = getMonthFirst(year, month);
  const b = getMonthDays(year, month);
  return [...new Array(a).fill(''), ...new Array(b).fill(0).map((_, idx) => idx + 1)];
}

export const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
}