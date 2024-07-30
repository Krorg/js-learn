import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Popups/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

const args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'First',
        },
        {
            content: 'Second',
        },
        {
            content: 'Third',
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = { ...args };

export const Dark = Template.bind({});
Dark.args = { ...args };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { ...args };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
