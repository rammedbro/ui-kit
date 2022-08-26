import createApp from './';

export default context => {
  const { app } = createApp(context);
  return app;
};
