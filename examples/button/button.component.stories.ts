import { Story, Meta } from '@storybook/angular';
import { CustomButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: CustomButtonComponent,
  argTypes: {
    background: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    textColor: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  background: 'primary',
  size: 'medium',
  textColor: 'white',
};

export const Secondary = Template.bind({});
Secondary.args = {
  background: 'secondary',
  size: 'medium',
  textColor: 'black',
};

export const Danger = Template.bind({});
Danger.args = {
  background: 'danger',
  size: 'medium',
  textColor: 'white',
};