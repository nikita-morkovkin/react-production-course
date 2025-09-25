import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetailsComments: {
        ids: [1, 2, 3],
        entities: {
            1: {
                id: '1',
                text: 'Text1',
                user: {
                    id: '1',
                    username: 'Nikita',
                    avatar: 'https://i.pinimg.com/736x/ce/a6/32/cea6328e6a60cf042221ffdc538805d4.jpg',
                },
            },
            2: {
                id: '2',
                text: 'Text2',
                user: {
                    id: '2',
                    username: 'Alice',
                    avatar: 'https://i.pinimg.com/736x/ce/a6/32/cea6328e6a60cf042221ffdc538805d4.jpg',
                },
            },
        },
    },
})];
