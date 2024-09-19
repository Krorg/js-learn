import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { Comment } from '@/entities/Comment/model/types/comment';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const comment: Comment = {
    id: '1',
    text: 'Some comment',
    user: {
        id: '1',
        username: 'Смешарик',
        avatar: 'https://klass.market/uploadedFiles/eshopimages/big/s1200.png',
    },
};

export const Primary = Template.bind({});
Primary.args = {
    comment,
};

export const PrimaryNewDesign = Template.bind({});
PrimaryNewDesign.args = {
    comment,
};
PrimaryNewDesign.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {
    comment,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    comment,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
