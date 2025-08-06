import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $capitalize: (word: string) => string
    $capitalizeWords: (str: string) => string
  }
}
