import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'Text 1',
        user: {
            id: '1',
            username: 'user1',
            avatar: 'https://i.pinimg.com/736x/3c/bd/cd/3cbdcdc4bc55fb4c54ab63f147361a85.jpg',
        },
    },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
