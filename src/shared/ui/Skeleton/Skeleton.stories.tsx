import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const LightNormal = Template.bind({});
LightNormal.args = {
    width: '100%',
    height: 200,
};
LightNormal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkNormal = Template.bind({});
DarkNormal.args = {
    width: '100%',
    height: 200,
};
DarkNormal.decorators = [ThemeDecorator(Theme.DARK)];

export const VioletNormal = Template.bind({});
VioletNormal.args = {
    width: '100%',
    height: 200,
};
VioletNormal.decorators = [ThemeDecorator(Theme.VIOLET)];

export const LightCircle = Template.bind({});
LightCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
LightCircle.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];

export const VioletCircle = Template.bind({});
VioletCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
VioletCircle.decorators = [ThemeDecorator(Theme.VIOLET)];
