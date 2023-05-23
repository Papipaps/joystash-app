import { StoryFn } from '@storybook/react';
import Typo, { TypoProps } from './Typo';

export default {
  title: 'Components/Typo',
  component: Typo,
  tags:['autodocs']
};

const Template: StoryFn<TypoProps> = (args:TypoProps) => <Typo {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  tag: 'h1',
  children: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  tag: 'h2',
  children: 'Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  tag: 'h3',
  children: 'Heading 3',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  tag: 'p',
  children: 'This is a paragraph.',
};

export const Span = Template.bind({});
Span.args = {
  tag: 'span',
  children: 'This is a span.',
};

export const Italics = Template.bind({});
Italics.args = {
  tag: 'i',
  children: 'This is italic text.',
};

export const InformationText = Template.bind({});
InformationText.args = {
  tag: 'p',
  children: 'This is an information text.',
  styleVariation: 'information',
};

export const NormalText = Template.bind({});
NormalText.args = {
  tag: 'p',
  children: 'This is a normal text.',
  styleVariation: 'text',
};

export const BoldHeading2 = Template.bind({});
BoldHeading2.args = {
  tag: 'h2',
  children: 'Bold Heading 2',
  font: 'bold',
  styleVariation: 'heading2',
};

export const SemiboldHeading2 = Template.bind({});
SemiboldHeading2.args = {
  tag: 'h2',
  children: 'Semibold Heading 2',
  font: 'semibold',
  styleVariation: 'heading2',
};

export const SemiboldHeading3 = Template.bind({});
SemiboldHeading3.args = {
  tag: 'h3',
  children: 'Semibold Heading 3',
  font: 'semibold',
  styleVariation: 'heading3',
};
