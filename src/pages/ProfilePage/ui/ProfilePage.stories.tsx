import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import withMock from 'storybook-addon-mock';
import { Profile } from '@/entities/Profile';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

const dats: Profile = {
    id: '1',
    username: 'Nagibator228',
    first: 'Вася',
    lastname: 'Пупкин',
    age: 11,
    country: Country.Russia,
    city: 'Podolsk',
    currency: Currency.RUB,
    avatar: 'https://www.kindpng.com/picc/m/456-4569194_ninja-png-image-ninja-avatar-transparent-png.png',
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/profile/1`,
            method: 'GET',
            status: 200,
            response: [{ ...dats }],
        },
    ],
};
Primary.decorators = [
    StoreDecorator({
        user: { authData: { id: '1' } },
        profile: { form: dats },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ profile: { form: dats } }),
];
