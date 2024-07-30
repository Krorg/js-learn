import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

const args = {
    defaultValue: '123',
    value: '123',
    label: 'This is Listbox',
    items: [
        {
            value: '1',
            content: 'First',
        },
        {
            value: '2',
            content: 'Second',
        },
        {
            value: '3',
            content: 'Third',
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = args;

export const TopLeft = Template.bind({});
TopLeft.args = {
    ...args,
    direction: 'top_left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    ...args,
    direction: 'top_right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    ...args,
    direction: 'bottom_left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    ...args,
    direction: 'bottom_right',
};

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
