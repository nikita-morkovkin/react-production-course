import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'entities/Article/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const LightBig = Template.bind({});
LightBig.args = {
    view: ArticleView.BIG,
};

export const LightSmall = Template.bind({});
LightSmall.args = {
    view: ArticleView.SMALL,
};

export const DarkBig = Template.bind({});
DarkBig.args = {
    view: ArticleView.BIG,
};
DarkBig.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkSmall = Template.bind({});
DarkSmall.args = {
    view: ArticleView.SMALL,
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const VioletBig = Template.bind({});
VioletBig.args = {
    view: ArticleView.BIG,
};
VioletBig.decorators = [ThemeDecorator(Theme.VIOLET)];

export const VioletSmall = Template.bind({});
VioletSmall.args = {
    view: ArticleView.SMALL,
};
VioletSmall.decorators = [ThemeDecorator(Theme.VIOLET)];
