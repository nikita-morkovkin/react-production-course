import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
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
        username: 'morkovkin',
        lastname: 'Morkovkin',
        first: 'Nikita',
        currency: Currency.RUB,
        country: Country.Russia,
        age: 17,
        city: 'Moscow',
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'Error',
};

export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};
