import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const data = {
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
Primary.args = {
    data,
};

export const Dark = Template.bind({});
Dark.args = {
    data,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { data };
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const readOnly = Template.bind({});
readOnly.args = {
    data,
    readonly: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
