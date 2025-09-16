
import { benefitIconOptions } from '../shared/benefit-icons';

const benefit = {
  name: 'benefit',
  title: 'Benefit Library',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'statement', title: 'Default benefit statement', type: 'text' },
    {
      name: 'icon',
      title: 'Icon (Heroicons v2)',
      type: 'string',
     	options: { list: benefitIconOptions },
    },
  ],
	preview: { select: { title: 'title', subtitle: 'icon' } },
};
export default benefit;
