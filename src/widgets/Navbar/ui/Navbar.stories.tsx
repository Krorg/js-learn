import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];

export const AuthNavbarNormal = Template.bind({});
AuthNavbarNormal.args = {};
AuthNavbarNormal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://bogatyr.club/uploads/posts/2024-04/77038/1712768988_bogatyr-club-bqt0-p-risunok-krosha-foni-1.png',
            },
        },
    }),
];

export const AuthNavbarDark = Template.bind({});
AuthNavbarDark.args = {};
AuthNavbarDark.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614550920_10-p-smeshariki-na-belom-fone-10.jpg',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const AuthNavbarOrange = Template.bind({});
AuthNavbarOrange.args = {};
AuthNavbarOrange.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614550920_10-p-smeshariki-na-belom-fone-10.jpg',
            },
        },
    }),
    ThemeDecorator(Theme.ORANGE),
];

export const AuthAdminNavbarNormal = Template.bind({});
AuthAdminNavbarNormal.args = {};
AuthAdminNavbarNormal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar: 'https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/japanese-traditional-man-1024.png',
                roles: [UserRole.ADMIN],
            },
        },
    }),
];
