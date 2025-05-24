/// <reference types="vite/client" />

declare module 'canvas-confetti';

interface Window {
  confetti: any;
}

// Add NodeJS namespace if it's missing
declare namespace NodeJS {
  interface Timeout {}
  interface Timer {}
}
