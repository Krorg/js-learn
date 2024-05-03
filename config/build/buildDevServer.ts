import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(optinos: BuildOptions): DevServerConfiguration {
    return {
        port: optinos.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
