export default function toLocaleTimeString(recivedDate: string) {
  const date = new Date(recivedDate).toLocaleDateString('pt-BR');
  return date;
}
