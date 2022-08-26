type CSSModule = Record<string, string>;

declare module '*.vue' {
  import Vue from 'vue';

  interface VueConstructor {
    $style: CSSModule;
  }

  export default Vue;
}

declare module '*.pcss' {
  var $style: CSSModule;

  export default $style;
}
