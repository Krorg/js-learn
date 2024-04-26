import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(optinos: BuildOptions): DevServerConfiguration {
    return {
        port: optinos.port,
        open: true,
        historyApiFallback: true
    };
}
