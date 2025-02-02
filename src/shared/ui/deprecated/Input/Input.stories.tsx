import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Username',
    value: 'username',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Username',
    value: 'username',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
