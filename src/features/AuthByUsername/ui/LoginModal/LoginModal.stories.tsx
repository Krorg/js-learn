import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/AuthByUsername/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({ loginForm: { username: '123', password: '123' } }),
    ],
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
    <LoginModal {...args} />
);

export const Normal = Template.bind({});
Normal.args = { isOpen: true };

export const Dark = Template.bind({});
Dark.args = { isOpen: true };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { isOpen: true };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Error = Template.bind({});
Error.args = { isOpen: true };
Error.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123', error: 'ERROR' },
    }),
];

export const Loading = Template.bind({});
Loading.args = { isOpen: true };
Loading.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '123', isLoading: true },
    }),
];
