import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpeg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'admin',
        lastname: 'adminov',
        age: 29,
        city: 'Kazan',
        country: Country.RUSSIA,
        currency: Currency.RUB,
        username: 'admin',
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    isLoading: true,
};
