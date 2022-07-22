import {animate, AnimationTriggerMetadata, style, transition, trigger} from "@angular/animations";

export const fadeInOutAnimation: AnimationTriggerMetadata = trigger('fadeInOut', [
  transition(':enter', [style({ opacity: 0 }), animate('180ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1 }))]),
  transition(':leave', [animate('200ms cubic-bezier(0.4, 0.0, 0.6, 1)', style({ opacity: 0 }))])
]);
