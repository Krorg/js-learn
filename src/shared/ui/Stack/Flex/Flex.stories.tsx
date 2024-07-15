import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
    direction: 'row',
};

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
    justify: 'end',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    direction: 'row',
    gap: '4',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const RowGap12 = Template.bind({});
RowGap12.args = {
    gap: '12',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const RowGap24 = Template.bind({});
RowGap24.args = {
    gap: '24',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
    direction: 'column',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    gap: '8',
    direction: 'column',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    gap: '32',
    direction: 'column',
    children: (
        <>
            <div>text</div>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </>
    ),
};
