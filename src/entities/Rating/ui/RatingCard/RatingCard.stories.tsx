import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = { title: 'Оцените' };

export const Dark = Template.bind({});
Dark.args = { title: 'Оцените' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { title: 'Оцените' };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const WithRate = Template.bind({});
WithRate.args = { rate: 4 };

export const WithFeedback = Template.bind({});
WithFeedback.args = {
    title: 'Оцените',
    hasFeedback: true,
    feedbackTitle: 'Оставьте пожалуйста отзыв',
};
