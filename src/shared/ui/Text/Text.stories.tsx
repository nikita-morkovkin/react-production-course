import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: 'Title of this component',
    text: 'Text of this component',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title of this component',
    text: 'Text of this component',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Only title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Only text',
};

export const BasicDark = Template.bind({});
BasicDark.args = {
    title: 'Title of this component',
    text: 'Text of this component',
};
BasicDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Only title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Only text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
