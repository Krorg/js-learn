import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AvatarImage from './testAvatar.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImage,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImage,
    size: 50,
};

export const Medium = Template.bind({});
Medium.args = {
    src: AvatarImage,
    size: 100,
};

export const Dark = Template.bind({});
Dark.args = {
    src: AvatarImage,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
