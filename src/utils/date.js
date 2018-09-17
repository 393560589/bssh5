export function formate(n) {
  const data = new Date(n * 1000)
  return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`
}