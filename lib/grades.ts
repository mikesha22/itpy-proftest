export function isEgeOnlyGrade(grade: string) {
  const numericGrade = Number(grade);
  return Number.isInteger(numericGrade) && numericGrade > 9;
}
