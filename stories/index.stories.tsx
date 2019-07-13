import React from 'react';
import { Button } from '@storybook/react/demo';
import PropsAddon from 'storybook-addon-props-fela';
import { storiesOf, setAddon } from '@storybook/react';

import { beer } from './mock';
import { initFelaProvider } from './utils/fela';

import { BeerInfo } from '../src/components/BeerInfo';
import { Card } from '../src/components/Card';

const FelaProvider = initFelaProvider();

setAddon(PropsAddon);
storiesOf('Punkapi', module)
  .addDecorator(FelaProvider)
  .add('Beer card', () => (
    <Card image={beer.image_url} children={<BeerInfo beer={beer} />} />
  ));