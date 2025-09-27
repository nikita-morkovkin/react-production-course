import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from 'entities/Article';
import { ArticleItem } from './ArticleItem';

export default {
    title: 'entities/Article/ArticleItem',
    component: ArticleItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => <ArticleItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    view: ArticleView.SMALL,
};
