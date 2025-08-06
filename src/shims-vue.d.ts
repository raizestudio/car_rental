export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $capitalize: (word: string) => string
    $capitalizeWords: (str: string) => string
  }
}
