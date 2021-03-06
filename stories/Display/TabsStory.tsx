import * as React from 'react';

import Tabs from '../../src/Display/Tabs';
import Badge from '../../src/General/Badge';
import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import StorybookComponent from '../StorybookComponent';

import {
  ETabAlignment,
  EHorizontalTabVariant,
} from '../../src/Utils/StyleConfig';

const props = {
  Tabs: [
    {
      name: 'variant',
      type: 'string',
      defaultValue: 'underlined',
      possibleValue: 'underlined, colored',
      require: 'no',
      description:
        'Set the change in the color pattern only for Horizontal tabs',
    },
    {
      name: 'alignment',
      type: 'string',
      defaultValue: 'horizontal',
      possibleValue: 'horizontal, vertical',
      require: 'no',
      description:
        'Sets alignment of Tab. The vertical tabs are changed to horizontal ones for screen size below 768',
    },
    {
      name: 'activeTab',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets the active tab.',
    },
    {
      name: 'onTabClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Gets the active tab',
    },
  ],
};

const TabsStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Tabs"
      code="import { Tabs } from 'glints-aries'"
      propsObject={props}
      usage={`<Tabs alignment="horizontal" variant="underlined">
        <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
        <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
        <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
        <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Underlined Horizontal Navigation Tabs
      </Heading>
      <Tabs
        alignment={ETabAlignment.HORIZONTAL}
        variant={EHorizontalTabVariant.UNDERLINED}
      >
        <Tabs.Pane tab="Job">
          Software Engineer <Badge label="1" />
        </Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      title="Tabs"
      code="import { Tabs } from 'glints-aries'"
      usage={`<Tabs alignment="horizontal" variant="colored">
        <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
        <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
        <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
        <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Colored Horizontal Navigation Tabs
      </Heading>
      <Tabs
        alignment={ETabAlignment.HORIZONTAL}
        variant={EHorizontalTabVariant.COLORED}
      >
        <Tabs.Pane tab="Job">
          Software Engineer <Badge label="1" />
        </Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      title="Tabs"
      code="import { Tabs } from 'glints-aries'"
      usage={`<Tabs alignment="vertical" variant="underlined">
        <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
        <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
        <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
        <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Vertical Navigation Tabs
      </Heading>
      <Tabs
        alignment={ETabAlignment.VERTICAL}
        variant={EHorizontalTabVariant.UNDERLINED}
      >
        <Tabs.Pane tab="Job">
          Software Engineer <Badge label="1" />
        </Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </StorybookComponent>
  </React.Fragment>
);

export default TabsStory;
