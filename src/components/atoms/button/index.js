// @flow
import * as React from 'react';
import {styled} from 'src/styles';

const ButtonCmp = styled('div', () => {
  return {};
});

type ButtonProp = {
  children?: any,
};

export const Button = (props: ButtonProp) => <ButtonCmp>Button</ButtonCmp>;
