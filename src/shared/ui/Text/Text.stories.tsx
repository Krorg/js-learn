import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextAlign, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Header',
    text: 'Body text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Header',
    text: 'Body text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Header',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Body text',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Header',
    text: 'Body text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Header',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Body text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const alignLeft = Template.bind({});
alignLeft.args = {
    title: 'Header',
    text: 'Body text',
    align: TextAlign.LEFT,
};

export const alignRight = Template.bind({});
alignRight.args = {
    title: 'Header',
    text: 'Body text',
    align: TextAlign.RIGHT,
};

export const alignCenter = Template.bind({});
alignCenter.args = {
    title: 'Header',
    text: 'Body text',
    align: TextAlign.CENTER,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Header',
    text: 'Body text',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Header',
    text: 'Body text',
    size: TextSize.L,
};
