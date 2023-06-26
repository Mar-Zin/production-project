import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Ligth = Template.bind({});
Ligth.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123' } })];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })];

export const IsLoading = Template.bind({});
IsLoading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'Error' } })];
