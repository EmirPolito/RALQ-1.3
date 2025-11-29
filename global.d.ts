declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": {
      src: string;
      alt?: string;
      "shadow-intensity"?: string;
      "interaction-prompt"?: string;
      autoRotate?: boolean;
      cameraControls?: boolean;
      ar?: boolean;
      style?: React.CSSProperties;
      [key: string]: any;
    };
  }
}
