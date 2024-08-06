import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

const args = {
    trigger: <Button>Click</Button>,
    children: [<div>First</div>, <div>Second</div>],
};

export const Primary = Template.bind({});
Primary.args = { ...args };
