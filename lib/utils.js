export const kebabCase = (str) =>
  str &&
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')
