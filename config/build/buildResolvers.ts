import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(optiopns: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [optiopns.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
