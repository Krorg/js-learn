import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children:
        'quia et suscipit suscipit recusandae consequuntur expedita etcum reprehenderit molestiae ut ut quas totam nostrum rerum estautem sunt rem eveniet architecto',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children:
        'quia et suscipit suscipit recusandae consequuntur expedita etcum reprehenderit molestiae ut ut quas totam nostrum rerum estautem sunt rem eveniet architecto',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
