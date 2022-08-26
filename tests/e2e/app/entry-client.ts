import createApp from './';

const { app } = createApp({
  path: location.pathname,
});

app.$mount('#app');
