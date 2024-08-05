import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

const params = {
    url: `${__API__}/notifications`,
    method: 'GET',
    status: 200,
    response: [
        {
            id: '1',
            title: 'Уведомление 1',
            description: 'У вас новое сообщение',
        },
        {
            id: '2',
            title: 'Уведомление 2',
            description: 'У вас новое сообщение',
        },
        {
            id: '3',
            title: 'Уведомление 3',
            description: 'У вас новое сообщение',
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = { mockData: [params] };

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
