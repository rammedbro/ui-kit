import Vue from 'vue';
import idObj from 'identity-obj-proxy';
import 'mutationobserver-shim';
import '~/directives/qa';
import '~/directives/body-scroll-lock';

// Mocking css modules for non functional components
Vue.prototype.$style = idObj;

jest.mock('@fe-icons', () => ({
  ic_s_eye_closed: 'svg',
}));
