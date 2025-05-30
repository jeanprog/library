export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda
  const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda
  return `${year}-${month}-${day}`;
}
export function formatDateToDDMMYYYY(date: Date): string {
  const year: number = date.getFullYear();
  const month: string = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda se necessário
  const day: string = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
  return `${day}/${month}/${year}`;
}
