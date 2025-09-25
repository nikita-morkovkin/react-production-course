import { ComponentMeta, ComponentStory } from '@storybook/react';
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
Normal.args = {};
