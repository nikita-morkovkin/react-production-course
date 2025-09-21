import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: {
            authData: {
                username: 'morkovkin',
                id: '1',
            },
        },
    })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                username: 'morkovkin',
                id: '1',
            },
        },
    })];

export const NoAuthLight = Template.bind({});
NoAuthLight.args = {};
NoAuthLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};
NoAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
