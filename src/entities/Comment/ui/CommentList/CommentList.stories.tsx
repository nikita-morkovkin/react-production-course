import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Text 1',
            user: {
                id: '1',
                username: 'user1',
                avatar: 'https://i.pinimg.com/736x/84/58/76/845876cbd64494500e1dda53bbaded7e.jpg',
            },
        },
    ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
