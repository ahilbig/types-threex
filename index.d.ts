// Extra Type definitions for threex.js
// Project: http://www.threejsgames.com/extensions/
// Subprojects currently in scope: http://www.threejsgames.com/extensions/#threex.domevents
// Definitions by: Andreas Hilbig <https://github.com/ahilbig>

import {Camera, Object3D} from "three";

export declare class DomEvents {
  constructor(camera: Camera, domElement?: HTMLElement);

  object: Camera;
  domElement: HTMLElement | HTMLDocument;

  // add an event listener for this callback
  addEventListener(obect: Object3D, type: string, listener: (event: Event) => void, withBoundingBox: boolean ): void;
  // remove an event listener for this callback
  removeEventListener(obect: Object3D, type: string, listener: (event: Event) => void, withBoundingBox: boolean ): void;
}

export declare class DragControls {
  constructor(objects, camera: Camera, domElement?: HTMLElement);

  object: Camera;
  domElement: HTMLElement | HTMLDocument;

  activate(): void;

  deactivate(): void;

  dispose(): void;

  // EventDispatcher mixins
  addEventListener(type: string, listener: (event: Event) => void ): void;
  hasEventListener(type: string, listener: (event: Event) => void): void;
  removeEventListener(type: string, listener: (event: Event) => void): void;
  dispatchEvent(event: { type: string; [attachment: string]: any; }): void;


}

export as namespace THREEx;
