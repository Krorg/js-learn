import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

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
    variant: 'error',
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
    align: 'left',
};

export const alignRight = Template.bind({});
alignRight.args = {
    title: 'Header',
    text: 'Body text',
    align: 'right',
};

export const alignCenter = Template.bind({});
alignCenter.args = {
    title: 'Header',
    text: 'Body text',
    align: 'center',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Header',
    text: 'Body text',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Header',
    text: 'Body text',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Header',
    text: 'Body text',
    size: 'l',
};
