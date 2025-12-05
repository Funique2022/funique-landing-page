declare module '@mkkellogg/gaussian-splats-3d' {
  export class Viewer {
    constructor(options?: any);
    addSplatScene(url: string, options?: any): Promise<void>;
    start(): Promise<void>;
    dispose(): void;
  }
  
  export const DropInViewer: any;
  export const SceneRevealMode: any;
}