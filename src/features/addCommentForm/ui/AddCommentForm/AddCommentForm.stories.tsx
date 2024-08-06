import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { action } from '@storybook/addon-actions';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 10 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: action('onSendComment'),
};
Primary.decorators = [
    StoreDecorator({ addCommentForm: { text: 'Test comment text' } }),
];

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: action('onSendComment'),
};
Dark.decorators = [
    StoreDecorator({ addCommentForm: { text: 'Test comment text' } }),
    ThemeDecorator(Theme.DARK),
];

export const Orange = Template.bind({});
Orange.args = {
    onSendComment: action('onSendComment'),
};
Orange.decorators = [
    StoreDecorator({ addCommentForm: { text: 'Test comment text' } }),
    ThemeDecorator(Theme.ORANGE),
];
