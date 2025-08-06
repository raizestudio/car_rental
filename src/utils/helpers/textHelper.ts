export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function capitalizeWords(str: string): string {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
