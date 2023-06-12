import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea aspernatur similique, quae voluptate perspiciatis! Reiciendis sequi perferendis libero ut! Alias sint ad non necessitatibus qui libero ducimus nobis. Laboriosam?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea aspernatur similique, quae voluptate perspiciatis! Reiciendis sequi perferendis libero ut! Alias sint ad non necessitatibus qui libero ducimus nobis. Laboriosam?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
