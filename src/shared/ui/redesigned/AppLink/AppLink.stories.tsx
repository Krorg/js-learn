import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary',
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    variant: 'red',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
