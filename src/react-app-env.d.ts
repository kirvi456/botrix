/// <reference types="react-scripts" />
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';

declare module 'react-dom/client' {
    var createRoot: ReactRoot;
    export { createRoot };
}
