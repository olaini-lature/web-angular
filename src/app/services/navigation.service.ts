import { CustomizationNavigationItem } from '@customization/components/navigation';

export const customCompactNavigation: CustomizationNavigationItem[] = [
  {
    id: 'dashboards',
    title: 'dashboard',
    subtitle: '',
    tooltip: '',
    type: 'aside',
    icon: 'mat_outline:dashboard',
    classes: {
      icon: 'icon-size-8'
    },
    children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  }
];

export const customDefaultNavigation: CustomizationNavigationItem[] = [
  {
    id: 'dashboards',
    title: 'dashboard',
    subtitle: '',
    type: 'group',
    icon: 'mat_outline:dashboard',
    children: [
      {
        id: 'dashboards.home',
        title: 'master-employee',
        subtitle: '',
        tooltip: '',
        type: 'basic',
        icon: 'mat_solid:people',
        link: '/employees'
      },
    ]
  }
];
