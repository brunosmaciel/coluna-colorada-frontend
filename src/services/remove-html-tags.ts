export default function removeHTMLTags(string: string): string {
  const htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

  return string.replace(htmlRegexG, '');
}
