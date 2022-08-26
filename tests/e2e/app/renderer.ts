import { createBundleRenderer } from 'vue-server-renderer';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import configs from '~root/webpack.config.e2e';
import type { Configuration } from 'webpack';

export function getRenderer() {
  const configClient: Configuration = configs.find((item: Configuration) => item.name === 'client');
  const configServer: Configuration = configs.find((item: Configuration) => item.name === 'server');
  const template = readFileSync(resolve(__dirname, './template.html'), 'utf-8');

  const bundle = JSON.parse(
    String(readFileSync(join(configServer.output.path, 'vue-ssr-server-bundle.json'), 'utf-8'))
  );
  const clientManifest = JSON.parse(
    String(readFileSync(join(configClient.output.path, 'vue-ssr-client-manifest.json'), 'utf-8'))
  );

  return createBundleRenderer(bundle, {
    template,
    inject: true,
    clientManifest,
  });
}
