import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleType } from '@/entities/Article';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = { value: ArticleType.IT };

export const Dark = Template.bind({});
Dark.args = { value: ArticleType.IT };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { value: ArticleType.IT };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
