import { gsap } from 'gsap';
import type { TransitionProps } from 'vue';

export const globalTransition = {
  name: 'global',
  mode: 'out-in',
  onBeforeEnter(el: Element) {
    gsap.set(el, { opacity: 0 });
  },
  onEnter(el: Element, done: () => void) {
    gsap.to(el, { opacity: 1, duration: 0.4, onComplete: done });
  },
  onAfterEnter(_el: Element) {},
  onEnterCancelled(_el: Element) {},
  onBeforeLeave(_el: Element) {},
  onLeave(el: Element, done: () => void) {
    gsap.to(el, {
      opacity: 0,
      duration: 0.4,
      onStart: () => {
        if (useRoute().name === 'about') console.log('to page');
      },
      onComplete: done,
    });
  },
  onAfterLeave(_el: Element) {},
  onLeaveCancelled(_el: Element) {},
} satisfies TransitionProps;

export const projectTransition = {
  name: 'project',
  mode: 'in-out',
  onBeforeEnter(el: Element) {
    gsap.set(el, { opacity: 0 });
  },
  onEnter(el: Element, done: () => void) {
    gsap.to(el, { opacity: 1, duration: 0.4, onComplete: done });
  },
  onAfterEnter(_el: Element) {},
  onEnterCancelled(_el: Element) {},
  onBeforeLeave(_el: Element) {},
  onLeave(_el: Element, done: () => void) {
    const fromEl = select('main').firstElementChild;
    const toEl = select('main').lastElementChild;

    done();
  },
  onAfterLeave(_el: Element) {},
  onLeaveCancelled(_el: Element) {},
} satisfies TransitionProps;

export const workTransition = {
  name: 'work',
  mode: 'in-out',
  onBeforeEnter(el: Element) {
    gsap.set(el, { opacity: 0 });
  },
  onEnter(el: Element, done: () => void) {
    gsap.to(el, { opacity: 1, duration: 0.4, onComplete: done });
  },
  onAfterEnter(_el: Element) {},
  onEnterCancelled(_el: Element) {},
  onBeforeLeave(_el: Element) {},
  onLeave(el: Element, _done: () => void) {
    gsap.to(el, {
      opacity: 0,
      duration: 0.4,
      onStart: () => {
        const toEl = select('main').children[1];
        const fromEl = select('main').lastElementChild;

        gsap.set('body', { overflow: 'hidden' });
        gsap.to(toEl, { opacity: 0.5, height: '100svh', overflow: 'auto' });
        gsap.set(fromEl, { position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' });
      },
      // onComplete: done,
    });

    // done();
  },
  onAfterLeave(_el: Element) {},
  onLeaveCancelled(_el: Element) {},
} satisfies TransitionProps;
