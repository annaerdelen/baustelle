import { gsap } from 'gsap';

export const globalTransition = {
  name: 'global',
  mode: 'out-in',
  onBeforeEnter(el) {
    gsap.set(el, { opacity: 0 });
  },
  onEnter(el, done) {
    gsap.to(el, { opacity: 1, duration: 0.4, onComplete: done });
  },
  onAfterEnter(el) {},
  onEnterCancelled(el) {},
  onBeforeLeave(el) {},
  onLeave(el, done) {
    gsap.to(el, {
      opacity: 0,
      duration: 0.4,
      onStart: () => {
        if (useRoute().name === 'about') console.log('to page');
      },
      onComplete: done,
    });
  },
  onAfterLeave(el) {},
  onLeaveCancelled(el) {},
};

export const projectTransition = {
  name: 'project',
  mode: 'in-out',
  onBeforeEnter(el) {
    gsap.set(el, { opacity: 0 });
  },
  onEnter(el, done) {
    gsap.to(el, { opacity: 1, duration: 0.4, onComplete: done });
  },
  onAfterEnter(el) {},
  onEnterCancelled(el) {},
  onBeforeLeave(el) {},
  onLeave(el, done) {
    const fromEl = select('main').firstElementChild;
    const toEl = select('main').lastElementChild;

    done();
  },
  onAfterLeave(el) {},
  onLeaveCancelled(el) {},
};
