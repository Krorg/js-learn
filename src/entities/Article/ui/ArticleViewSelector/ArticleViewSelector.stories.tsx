import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/consts/articleConsts';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = { view: ArticleView.BIG };

export const Dark = Template.bind({});
Dark.args = { view: ArticleView.BIG };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { view: ArticleView.BIG };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
