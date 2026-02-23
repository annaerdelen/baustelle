import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { SplitText } from 'gsap/SplitText';

//TODO remove when not needed
export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger);
});
