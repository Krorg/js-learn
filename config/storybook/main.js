module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-queryparams',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
