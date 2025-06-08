import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'quickstart', // 1. Quick Start
      label: 'Quick Start',
    },
    {
      type: 'category',
      label: 'Core SDK',
      collapsible: true,
      collapsed: false,
      items: [
        'sdk/overview',
        'sdk/installation',
        'sdk/usage',
      ],
    },
    {
      type: 'category',
      label: 'React SDK',
      collapsible: true,
      collapsed: false,
      items: [
        'react/overview',
        'react/installation',
        'react/usage',
      ],
    },
    {
      type: 'category',
      label: 'Server SDK',
      collapsible: true,
      collapsed: false,
      items: [
        'server/overview',
        'server/installation',
        'server/usage',
      ],
    },
    {
      type: 'doc',
      id: 'dashboard/usage', // 5. Dashboard
      label: 'Dashboard Guide',
    },
    {
      type: 'doc',
      id: 'faq', // 6. FAQ
      label: 'FAQ',
    },
  ],
};

export default sidebars;