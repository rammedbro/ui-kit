import http from '@bx-fe/http-server';
import { createHttpTerminator } from 'http-terminator';
import sirv from 'sirv';
import getPort from 'get-port';
import ip from 'ip';
import { getRenderer } from '~e2e/app/renderer';
import configs from '~root/webpack.config.e2e';
import type { Configuration } from 'webpack';

const configServer: Configuration = configs.find((item: Configuration) => item.name === 'server');

export interface IServer {
  url: string;
  protocol: string;
  host: string;
  port: number;
  terminate: () => Promise<void>;
}

export async function createServer(): Promise<IServer> {
  const app = http();
  const host = ip.address();
  const port = await getPort({ host, port: getPort.makeRange(9200, 9400) });
  const url = `http://${host}:${port}`;

  app
    .use(configServer.output.publicPath, sirv(configServer.output.path))
    .use('/__tests__/', async (req, res) => {
      let html = '';

      try {
        const renderer = getRenderer();
        html = await renderer.renderToString({ path: req.originalUrl });
      } catch (e) {
        // Server error capturing
        const { name, message, stack } = e;
        const errors = [{ name, message, stack }];
        const json = JSON.stringify(errors, null, 2);
        html = `<div id="app"><pre id="server-errors">${json}</pre></div>`;
      }

      res.end(html);
    });

  await new Promise<void>(resolve => {
    app.listen(port, host, () => {
      console.log(
        `Server listens on ${url}\n` +
        `Scenarios can be found on ${url}/__tests__/`
      );
      resolve();
    });
  });

  const { server } = app;

  const httpTerminator = createHttpTerminator({
    server,
    gracefulTerminationTimeout: 10 * 1000
  });
  const terminate = () => httpTerminator
    .terminate();

  return {
    url,
    protocol: 'http',
    host,
    port,
    terminate
  };
}
