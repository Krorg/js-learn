import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import withMock from 'storybook-addon-mock';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({ user: { authData: { id: '2' } } })],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = { articleId: '1' };

export const Dark = Template.bind({});
Dark.args = { articleId: '1' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { articleId: '1' };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const WithRating = Template.bind({});
WithRating.args = { articleId: '1' };
WithRating.parameters = {
    mockData: [
        {
            url: `${__API__}/articles-rating?userId=2&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};
