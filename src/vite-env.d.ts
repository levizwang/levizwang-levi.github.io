/// <reference types="vite/client" />

declare module '*.md' {
  const attributes: any;
  const html: string;
  export { attributes, html };
}

declare module '*.JPG' {
  const value: string;
  export default value;
}
