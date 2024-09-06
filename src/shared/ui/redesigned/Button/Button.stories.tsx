import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outlined',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outlined',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '<',
    variant: 'outlined',
    square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '<',
    variant: 'outlined',
    square: true,
    size: 'm',
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '<',
    variant: 'outlined',
    square: true,
    size: 'l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '<',
    variant: 'outlined',
    square: true,
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    variant: 'outlined',
    disabled: true,
};
