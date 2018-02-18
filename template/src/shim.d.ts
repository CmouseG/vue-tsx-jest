declare namespace JSX {
  interface Element {}
  interface ElementAttributesProperty {
    $props // Add type checking to component props
  }
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module 'style'
declare module 'vue-styled-components'
