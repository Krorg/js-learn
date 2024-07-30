import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from 'entities/User';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Story />
            </div>
        ),
        StoreDecorator({
            user: {
                authData: {
                    avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614550920_10-p-smeshariki-na-belom-fone-10.jpg',
                },
            },
        }),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
