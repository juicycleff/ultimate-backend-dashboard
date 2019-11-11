import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {wInfo} from '../../utils/w-info';
import Sidebar from './sidebar';

const stories = storiesOf('Components/Sidebar', module);
stories.addDecorator(withKnobs);

stories.add('default', wInfo()(() => (
    <Sidebar>
     {text('Label', 'Default')}
    </Sidebar>
  )),
);
