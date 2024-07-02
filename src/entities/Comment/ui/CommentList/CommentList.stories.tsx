import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';
import { Comment } from 'entities/Comment/model/types/comment';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

const comments: Comment[] = [
    {
        id: '1',
        text: 'Test comment',
        user: {
            id: '1',
            username: 'Test user',
            avatar: 'https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png',
        },
    },
    {
        id: '2',
        text: 'Test comment 2',
        user: {
            id: '2',
            username: 'User',
            avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614550920_10-p-smeshariki-na-belom-fone-10.jpg',
        },
    },
    {
        id: '3',
        text: 'Test comment 3',
        user: { id: '3', username: 'NoAvatarUser' },
    },
];

export const Primary = Template.bind({});
Primary.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comments,
    isLoading: true,
};

export const noComments = Template.bind({});
noComments.args = {};
