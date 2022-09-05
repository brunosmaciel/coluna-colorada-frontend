export default function toUpperCase(string: string): string {
  const str = string;
  const capitalized = str[0].toUpperCase() + str.substr(1); // Ricardo

  return capitalized;
}
